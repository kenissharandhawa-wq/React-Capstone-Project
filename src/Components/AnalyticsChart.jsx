import { PieChart, Pie, Cell, Tooltip } from "recharts";
function AnalyticsChart({ data }) {
  const COLORS = [
    "#6367FF", 
    "#8494FF", 
    "#C9BEFF", 
    "#FFDBFD"
  ];
  
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
        labelLine={false}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip
        formatter={(value, name) => [`₹${value}`, name]}
        contentStyle={{ fontWeight: "bold", borderRadius: "8px" }}
      />
    </PieChart>
  );
}

export default AnalyticsChart;



