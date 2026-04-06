import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

// Server-side Supabase with service role key (bypasses RLS)
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  const { email, source } = await req.json();

  if (!email?.trim()) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  // Insert into waitlist
  const { error } = await supabaseAdmin
    .from("waitlist")
    .insert({ email: email.trim().toLowerCase(), source });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json({ status: "duplicate" });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Get total count
  const { count } = await supabaseAdmin
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  // Send email notification (fire-and-forget, don't block response)
  transporter
    .sendMail({
      from: `"Tallify Waitlist" <${process.env.GMAIL_USER}>`,
      to: "anuj2004185@gmail.com",
      subject: `🎉 New Waitlist Signup — ${email.trim().toLowerCase()}`,
      html: `
        <div style="font-family: -apple-system, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 24px; background: #fff; border-radius: 12px;">
          <div style="margin-bottom: 24px;">
            <span style="display: inline-block; background: #fdf1ef; color: #f0724f; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 6px 14px; border-radius: 999px;">
              Tallify Waitlist
            </span>
          </div>

          <h2 style="font-size: 22px; font-weight: 800; color: #0b0b1a; margin: 0 0 8px;">
            New signup 🎉
          </h2>
          <p style="color: #9191a0; font-size: 14px; margin: 0 0 28px;">Someone just joined the Tallify waitlist.</p>

          <div style="background: #f7f7f8; border-radius: 10px; padding: 20px 24px; margin-bottom: 20px;">
            <p style="font-size: 12px; font-weight: 600; color: #9191a0; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 6px;">Email</p>
            <p style="font-size: 16px; font-weight: 700; color: #0b0b1a; margin: 0;">${email.trim().toLowerCase()}</p>
          </div>

          <div style="background: #f7f7f8; border-radius: 10px; padding: 20px 24px; margin-bottom: 20px;">
            <p style="font-size: 12px; font-weight: 600; color: #9191a0; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 6px;">Source</p>
            <p style="font-size: 16px; font-weight: 700; color: #0b0b1a; margin: 0;">${source === "hero" ? "Hero section" : "Waitlist CTA section"}</p>
          </div>

          <div style="background: #fff8f7; border: 1px solid rgba(240,114,79,0.2); border-radius: 10px; padding: 20px 24px;">
            <p style="font-size: 12px; font-weight: 600; color: #9191a0; text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 6px;">Total registrations</p>
            <p style="font-size: 32px; font-weight: 800; color: #f0724f; margin: 0;">${count ?? "—"}</p>
          </div>

          <p style="font-size: 12px; color: #9191a0; margin-top: 28px; margin-bottom: 0; text-align: center;">
            Tallify · ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      `,
    })
    .catch((err) => console.error("Email send failed:", err));

  return NextResponse.json({ status: "success", count });
}
