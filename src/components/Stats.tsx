"use client";

const stats = [
  { value: "4,800+", label: "Active users", sub: "across Nigeria" },
  { value: "20+", label: "Banks connected", sub: "GTBank, Kuda, Access & more" },
  { value: "₦2.1B+", label: "Transactions tracked", sub: "and growing daily" },
  { value: "98%", label: "Uptime", sub: "bank-grade reliability" },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-14 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl font-extrabold gradient-text mb-1">{s.value}</p>
              <p className="text-white font-semibold text-sm">{s.label}</p>
              <p className="text-slate-500 text-xs mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
