import { PieChart, Pie, Cell, Tooltip } from "recharts";

function AnalyticsChart() {
  // Subscription data with ₹ prices
  const data = [
    { name: "Netflix", cost: 199 },
    { name: "Spotify", cost: 99 },
    { name: "Disney+", cost: 399 }
  ];

  // Softer brand-inspired colors
  const COLORS = [
    "rgba(255, 99, 132, 0.7)",   // Netflix → soft red
    "rgba(75, 192, 75, 0.7)",    // Spotify → soft green
    "rgba(54, 162, 235, 0.7)"    // Disney+ → soft blue
  ];

  // Custom label renderer with bold text
  const renderLabel = ({ name, value }) => (
    <tspan style={{ fontWeight: "bold", fill: "#111" }}>
      {name}: ₹{value}
    </tspan>
  );

  return (
    <PieChart width={320} height={320}>
      <Pie
        data={data}
        dataKey="cost"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={110}
        label={renderLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip
        formatter={(value, name) => [`₹${value}`, name]}
        contentStyle={{ fontWeight: "bold" }}
      />
    </PieChart>
  );
}

export default AnalyticsChart;



