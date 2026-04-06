"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
          <Sparkles size={13} className="text-emerald-400" />
          <span className="text-emerald-400 text-sm font-medium">7-day free trial • No credit card</span>
        </div>

        <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
          Take control of your{" "}
          <span className="gradient-text">naira today</span>
        </h2>

        <p className="text-slate-300 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Join 4,800+ Indians who have stopped wondering where their money goes
          and started building real financial freedom with Tallify.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1"
          >
            Create free account
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="text-slate-400 hover:text-white font-medium px-6 py-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all text-lg hover:bg-white/5"
          >
            Learn more
          </a>
        </div>

        <p className="text-slate-500 text-sm mt-6">
          Free plan available forever. Upgrade or cancel any time.
        </p>
      </div>
    </section>
  );
}
