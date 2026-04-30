function SubscriptionCard({ name, renewalDate }) {
  let bgClass = "bg-white/10 backdrop-blur-md"; 
  let price = "";

  if (name.toLowerCase().includes("netflix")) {
    bgClass = "bg-gradient-to-r from-red-100/50 via-red-200/40 to-gray-100/30";
    price = 199;
  } else if (name.toLowerCase().includes("spotify")) {
    bgClass = "bg-gradient-to-r from-green-100/50 via-green-200/40 to-gray-100/30";
    price = 99;
  } else if (name.toLowerCase().includes("disney")) {
    bgClass = "bg-gradient-to-r from-blue-100/50 via-blue-200/40 to-gray-100/30";
    price = 399;
  }

  return (
    <div
      className={`${bgClass} rounded-xl p-6 shadow-md transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-pink-300/50`}
    >
      <h2 className="text-xl font-bold text-gray-900">{name}</h2>
      <p className="mt-2 text-gray-800">Price: ₹{price}</p>
      <p className="mt-1 text-gray-700">Renews: {renewalDate}</p>
    </div>
  );
}

export default SubscriptionCard;


