import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

const data = [
  { name: 'Fondos indexados', value: 52, fill: '#D4A5A5' },
  { name: 'Inmobiliario', value: 33, fill: '#A5D4A5' },
  { name: 'Ahorro', value: 9, fill: '#A5A5D4' },
  { name: 'Criptomonedas', value: 4, fill: '#D4D4A5' },
  { name: 'Inversión activa', value: 2, fill: '#D4A595' },
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
          label
        />
        <Tooltip formatter={(value, label) => [`${value}%`, label]} />
      </PieChart>
    </ResponsiveContainer>
  )
}