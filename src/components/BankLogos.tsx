"use client";

const banks = [
  { name: "GTBank", color: "#f97316", short: "GT" },
  { name: "Access", color: "#ef4444", short: "AC" },
  { name: "Kuda", color: "#7c3aed", short: "KD" },
  { name: "OPay", color: "#22c55e", short: "OP" },
  { name: "Zenith", color: "#dc2626", short: "ZN" },
  { name: "UBA", color: "#b91c1c", short: "UB" },
  { name: "First Bank", color: "#1d4ed8", short: "FB" },
  { name: "Stanbic", color: "#0369a1", short: "SB" },
  { name: "Fidelity", color: "#047857", short: "FD" },
  { name: "Sterling", color: "#7c2d12", short: "ST" },
];

export default function BankLogos() {
  return (
    <section className="py-16 bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest mb-10">
          Connects to 20+ Indian banks
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {banks.map((bank) => (
            <div
              key={bank.name}
              className="flex items-center gap-2.5 bg-white/5 border border-white/10 hover:border-white/20 rounded-xl px-5 py-3 transition-all hover:bg-white/8 group cursor-default"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0"
                style={{ backgroundColor: bank.color }}
              >
                {bank.short}
              </div>
              <span className="text-slate-400 text-sm font-medium group-hover:text-slate-200 transition-colors">
                {bank.name}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2.5 bg-white/5 border border-dashed border-white/10 rounded-xl px-5 py-3">
            <span className="text-slate-500 text-sm">+10 more</span>
          </div>
        </div>
      </div>
    </section>
  );
}
