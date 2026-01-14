import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Cell,
} from "recharts";

const months = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
const zones = ["Norte Grande", "Norte Chico", "Centro", "Sur", "Austral"];
const GRAY_ZONES = new Set(["Sur", "Norte Chico"]);

function buildValue(zoneIndex, monthIndex) {
  const zoneBase = 55 + zoneIndex * 14;
  const season = [14, 18, 24, 34, 46, 58, 68, 62, 50, 36, 24, 16][monthIndex];
  const ampByZone = [30, 22, 18, 26, 34][zoneIndex];
  const phaseByZone = [0.0, 0.6, 1.2, 1.8, 2.4][zoneIndex];
  const wave =
    Math.round(
      (Math.sin((monthIndex / 12) * Math.PI * 2 + phaseByZone) + 1) * 0.5 * ampByZone
    );
  const micro = (((zoneIndex + 3) * (monthIndex + 7) * 17) % 19);
  return zoneBase + season + wave + micro;
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid rgba(0,0,0,0.12)",
        borderRadius: 12,
        padding: 10,
        boxShadow: "0 18px 40px rgba(0,0,0,0.10)",
      }}
    >
      <p style={{ margin: 0, fontWeight: 700 }}>{d.zone}</p>
      <p style={{ margin: "6px 0 0 0", color: "rgba(26,28,29,0.75)" }}>
        {d.month} · valor: <span style={{ fontWeight: 700 }}>{d.value}</span>
      </p>
    </div>
  );
}

export default function BubbleChart({ compact = false }) {
  const raw = useMemo(() => {
    return zones.flatMap((zone, zi) =>
      months.map((month, mi) => {
        const value = buildValue(zi, mi);
        return {
          x: mi,
          y: zi,
          month,
          zone,
          value,
          isGray: GRAY_ZONES.has(zone),
        };
      })
    );
  }, []);

  const data = useMemo(() => {
    const vals = raw.map((d) => d.value);
    const min = Math.min(...vals);
    const max = Math.max(...vals);
    const denom = Math.max(1, max - min);

    return raw.map((d) => {
      const t = (d.value - min) / denom;
      const sized = Math.pow(t, 2.35);

      return {
        ...d,
        // en compact bajamos un poco para que no explote el layout
        size: compact ? (24 + sized * 700) : (30 + sized * 1200),
      };
    });
  }, [raw, compact]);

  const sizeDomain = useMemo(() => {
    const maxS = Math.max(...data.map((d) => d.size));
    return [0, maxS];
  }, [data]);

  // ticks: en mobile mostramos menos meses (más legible)
  const xTicks = compact ? [0, 2, 4, 6, 8, 10] : [0,1,2,3,4,5,6,7,8,9,10,11];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        margin={{
          top: compact ? 16 : 26,
          right: compact ? 18 : 24,
          bottom: compact ? 18 : 26,
          left: compact ? -6 : 6,
        }}
      >
        <XAxis
          type="number"
          dataKey="x"
          domain={[-0.5, 11.5]}
          ticks={xTicks}
          tickFormatter={(v) => months[Math.round(v)] ?? ""}
          tick={{ fill: "rgba(26,28,29,0.55)", fontSize: compact ? 11 : 12 }}
          tickLine={false}
          axisLine={{ stroke: "rgba(0,0,0,0.08)" }}
        />

        <YAxis
          type="number"
          dataKey="y"
          domain={[-0.5, zones.length - 0.5]}
          ticks={[0,1,2,3,4]}
          tickFormatter={(v) => zones[Math.round(v)] ?? ""}
          width={compact ? 86 : 140} // 👈 clave: si no, mobile queda sin espacio
          tick={{ fill: "rgba(26,28,29,0.55)", fontSize: compact ? 11 : 12 }}
          tickLine={false}
          axisLine={false}
        />

        <ZAxis
          type="number"
          dataKey="size"
          domain={sizeDomain}
          range={compact ? [18, 220] : [34, 420]} // 👈 burbujas más chicas en mobile
        />

        <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<CustomTooltip />} />

        <Scatter data={data}>
          {data.map((d, i) => (
            <Cell
              key={i}
              fill={d.isGray ? "rgba(0,0,0,0.7)" : "#00AA2B"}
              fillOpacity={d.isGray ? 0.22 : 0.45}
            />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}
