import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/** Add an email to the waitlist via the server API route.
 *  Returns "duplicate" | "success" | error string */
export async function joinWaitlist(
  email: string,
  source: "hero" | "waitlist_cta"
): Promise<string | null> {
  try {
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source }),
    });

    const data = await res.json();

    if (!res.ok) return data.error ?? "Something went wrong";
    if (data.status === "duplicate") return "duplicate";
    return null; // success
  } catch {
    return "Network error. Please try again.";
  }
}
