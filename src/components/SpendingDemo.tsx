"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const areaData = [
  { month: "Oct", income: 380000, spend: 210000 },
  { month: "Nov", income: 420000, spend: 260000 },
  { month: "Dec", income: 510000, spend: 340000 },
  { month: "Jan", income: 450000, spend: 290000 },
  { month: "Feb", income: 490000, spend: 300000 },
  { month: "Mar", income: 560000, spend: 320000 },
];

const pieData = [
  { name: "Food & Dining", value: 35, color: "#10b981" },
  { name: "Transport", value: 20, color: "#3b82f6" },
  { name: "Bills & Utilities", value: 18, color: "#8b5cf6" },
  { name: "Entertainment", value: 12, color: "#f59e0b" },
  { name: "Shopping", value: 15, color: "#f43f5e" },
];

const formatNaira = (v: number) =>
  v >= 1000 ? `₦${(v / 1000).toFixed(0)}k` : `₦${v}`;

export default function SpendingDemo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-emerald-600 text-sm font-medium">Live analytics</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Beautiful charts that{" "}
            <span className="gradient-text">tell your money story</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Visualise income vs. spending trends and see exactly where your naira goes each month.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Area Chart */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h3 className="text-slate-900 font-bold">Income vs. Spending</h3>
                <p className="text-slate-500 text-sm">Last 6 months</p>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 text-slate-500">
                  <span className="w-3 h-1 bg-emerald-500 rounded-full inline-block" />
                  Income
                </span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <span className="w-3 h-1 bg-blue-400 rounded-full inline-block" />
                  Spending
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={areaData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="spendGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={formatNaira} tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip
                  formatter={(v) => [`₦${Number(v).toLocaleString()}`, ""]}
                  contentStyle={{ background: "#0f172a", border: "none", borderRadius: "12px", color: "#fff" }}
                />
                <Area type="monotone" dataKey="income" stroke="#10b981" strokeWidth={2.5} fill="url(#incomeGrad)" />
                <Area type="monotone" dataKey="spend" stroke="#60a5fa" strokeWidth={2.5} fill="url(#spendGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart + breakdown */}
          <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
            <div className="mb-2">
              <h3 className="text-slate-900 font-bold">Spending Breakdown</h3>
              <p className="text-slate-500 text-sm">This month by category</p>
            </div>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-2.5">
                {pieData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: item.color }} />
                    <span className="text-slate-600 text-sm flex-1">{item.name}</span>
                    <span className="text-slate-800 text-sm font-semibold">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI tip */}
            <div className="mt-4 bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3 flex items-start gap-3">
              <span className="text-xl">💡</span>
              <p className="text-emerald-800 text-sm leading-snug">
                Your food spending is <strong>12% above</strong> your average. Cut 2 takeout orders this week to stay on track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
