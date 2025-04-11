import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";

const budgetData = [
  { name: 'Gastos básicos', value: 40 },
  { name: 'Ocio', value: 30 },
  { name: 'Ahorro e inversión', value: 30 },
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
          fill="#989898"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}