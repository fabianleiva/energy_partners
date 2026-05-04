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
  { name: "1",  "Potencia programada": 320,  "Potencia realizada": 410 },
  { name: "2",  "Potencia programada": 175,  "Potencia realizada": 230 },
  { name: "3",  "Potencia programada": 260,  "Potencia realizada": 345 },
  { name: "4",  "Potencia programada": 390,  "Potencia realizada": 450 },
  { name: "5",  "Potencia programada": 270,  "Potencia realizada": 321 },
  { name: "6",  "Potencia programada": 195,  "Potencia realizada": 235 },
  { name: "7",  "Potencia programada": 220,  "Potencia realizada": 267 },
  { name: "8",  "Potencia programada": 310,  "Potencia realizada": 378 },
  { name: "9",  "Potencia programada": 165,  "Potencia realizada": 210 },
  { name: "10", "Potencia programada": 250,  "Potencia realizada": 294 },
  { name: "12", "Potencia programada": 355,  "Potencia realizada": 415 },
  { name: "13", "Potencia programada": 225,  "Potencia realizada": 290 },
  { name: "14", "Potencia programada": 305,  "Potencia realizada": 371 },
  { name: "15", "Potencia programada": 155,  "Potencia realizada": 200 },
  { name: "16", "Potencia programada": 285,  "Potencia realizada": 340 },
  { name: "17", "Potencia programada": 760,  "Potencia realizada": 826 },
  { name: "18", "Potencia programada": 590,  "Potencia realizada": 653 },
  { name: "19", "Potencia programada": 315,  "Potencia realizada": 366 },
  { name: "20", "Potencia programada": 435,  "Potencia realizada": 486 },
  { name: "21", "Potencia programada": 460,  "Potencia realizada": 512 },
  { name: "22", "Potencia programada": 265,  "Potencia realizada": 302 },
  { name: "23", "Potencia programada": 380,  "Potencia realizada": 425 },
  { name: "24", "Potencia programada": 415,  "Potencia realizada": 467 },
  { name: "25", "Potencia programada": 300,  "Potencia realizada": 370 },
  { name: "26", "Potencia programada": 155,  "Potencia realizada": 194 },
  { name: "27", "Potencia programada": 345,  "Potencia realizada": 415 },
  { name: "28", "Potencia programada": 325,  "Potencia realizada": 376 },
  { name: "29", "Potencia programada": 255,  "Potencia realizada": 295 },
  { name: "30", "Potencia programada": 280,  "Potencia realizada": 322 },
  { name: "31", "Potencia programada": 205,  "Potencia realizada": 246 },
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
          width={compact ? 52 : 60}
          tickFormatter={(v) => `${v} MW`}
        />

        <Tooltip formatter={(value, name) => [`${value} MW`, name]} />

        {/* En mobile la leyenda se come el alto: la ocultamos solo en compact */}
        {!compact && (
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        )}

<Bar dataKey="Potencia programada" fill="#d9d9d9" barSize={compact ? 10 : 18} />
        <Bar dataKey="Potencia realizada" fill="#00aa2b56" barSize={compact ? 10 : 18} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
