import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: 'Fondos indexados', value: 53.6 },
  { name: 'Inmobiliario', value: 42.9 },
  { name: 'Criptomonedas', value: 3.5 },
];

export default function InvestmentChart() {
  return (
    <ResponsiveContainer height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#989898"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}