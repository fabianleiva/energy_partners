import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Sample data
const data = [
  { month: "Ene", A: 4000, B: 2400, C: 2400 },
  { month: "Feb", A: 3000, B: 1398, C: 2210 },
  { month: "Mar", A: 2000, B: 6800, C: 2290 },
  { month: "Apr", A: 2780, B: 3908, C: 2000 },
  { month: "May", A: 1890, B: 4800, C: 2181 },
  { month: "Jun", A: 2390, B: 3800, C: 2500 },
  { month: "Jul", A: 3490, B: 4300, C: 2100 },
];

const StackedAreaChart = ({ compact = false }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: compact ? 8 : 10,
          left: compact ? 0 : 12,
          bottom: compact ? 24 : 10, // 👈 espacio para meses en alturas pequeñas
        }}
      >
        <CartesianGrid strokeDasharray="3 6" stroke="rgba(0,0,0,0.08)" />

        <XAxis
          dataKey="month"
          tick={{ fill: "rgba(26,28,29,0.55)", fontSize: compact ? 11 : 12 }}
          axisLine={{ stroke: "rgba(0,0,0,0.10)" }}
          tickLine={{ stroke: "rgba(0,0,0,0.08)" }}
          interval={compact ? "preserveStartEnd" : 0}
          tickMargin={8}
        />

        <YAxis
          tick={{ fill: "rgba(26,28,29,0.55)", fontSize: compact ? 11 : 12 }}
          axisLine={{ stroke: "rgba(0,0,0,0.10)" }}
          tickLine={{ stroke: "rgba(0,0,0,0.08)" }}
          width={compact ? 42 : 44}
        />

        <Tooltip
          contentStyle={{
            borderRadius: 14,
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
            color: "rgba(26,28,29,0.85)",
          }}
          labelStyle={{ color: "rgba(26,28,29,0.65)" }}
        />

        <Area
          type="monotone"
          dataKey="A"
          stackId="1"
          stroke="rgba(22,58,61,0.55)"
          fill="rgba(22,58,61,0.55)"
          fillOpacity={0.25}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
        <Area
          type="monotone"
          dataKey="B"
          stackId="1"
          stroke="#00AA2B"
          fill="#00AA2B"
          fillOpacity={0.18}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
        <Area
          type="monotone"
          dataKey="C"
          stackId="1"
          stroke="rgba(22,58,61,0.55)"
          fill="rgba(22,58,61,0.55)"
          fillOpacity={0.1}
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StackedAreaChart;
