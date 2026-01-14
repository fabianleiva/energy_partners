import {
  ResponsiveContainer,
  BarChart,
  Bar,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Sample data
const data = [
  { name: "1", B: 300, A: 456 },
  { name: "2", B: -145, A: 230 },
  { name: "3", B: -100, A: 345 },
  { name: "4", B: -8, A: 450 },
  { name: "5", B: 100, A: 321 },
  { name: "6", B: 9, A: 235 },
  { name: "7", B: 53, A: 267 },
  { name: "8", B: 252, A: -378 },
  { name: "9", B: 79, A: -210 },
  { name: "10", B: 294, A: -23 },
  { name: "12", B: 43, A: 45 },
  { name: "13", B: -74, A: 90 },
  { name: "14", B: -71, A: 130 },
  { name: "15", B: -117, A: 11 },
  { name: "16", B: -186, A: 107 },
  { name: "17", B: -16, A: 926 },
  { name: "18", B: -125, A: 653 },
  { name: "19", B: 222, A: 366 },
  { name: "20", B: 372, A: 486 },
  { name: "21", B: 182, A: 512 },
  { name: "22", B: 164, A: 302 },
  { name: "23", B: 316, A: 425 },
  { name: "24", B: 131, A: 467 },
  { name: "25", B: 291, A: -190 },
  { name: "26", B: -47, A: 194 },
  { name: "27", B: -415, A: 371 },
  { name: "28", B: -182, A: 376 },
  { name: "29", B: -93, A: 295 },
  { name: "30", B: -99, A: 322 },
  { name: "31", B: -52, A: 246 },
];

const SimpleBarChart = ({ compact = false }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: compact ? 8 : 12,
          right: compact ? 8 : 16,
          left: compact ? 6 : 12,
          bottom: compact ? 6 : 10,
        }}
        barCategoryGap={compact ? 12 : 18}
        barGap={compact ? 4 : 6}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="name"
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
          width={compact ? 34 : 42}
        />

        <Tooltip />

        {/* En mobile la leyenda se come el alto: la ocultamos solo en compact */}
        {!compact && (
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        )}

        <ReferenceLine y={0} stroke="#000" />

        <Bar dataKey="A" fill="#d9d9d9" barSize={compact ? 10 : 18} />
        <Bar dataKey="B" fill="#00aa2b56" barSize={compact ? 10 : 18} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
