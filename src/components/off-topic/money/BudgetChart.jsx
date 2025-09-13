import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

const budgetData = [
  { name: 'Gastos básicos', value: 40, fill: '#D4A5A5' },
  { name: 'Ocio', value: 30, fill: '#A5D4A5' },
  { name: 'Ahorro e inversión', value: 30, fill: '#A5A5D4' },
];

export default function BudgetChart() {
  return (
    <ResponsiveContainer height={300}>
      <PieChart>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={budgetData}
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