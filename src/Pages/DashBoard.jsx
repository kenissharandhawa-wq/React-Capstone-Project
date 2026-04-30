import { useContext } from "react";
import { SubscriptionContext } from "../Context/SubscriptionContext";
import SubscriptionCard from "../Components/SubscriptionCard";
import AnalyticsChart from "../Components/AnalyticsChart";
import Loader from "../Components/Loader";

function DashBoard() {
  const { subscriptions, loading } = useContext(SubscriptionContext);

  if (loading) return <Loader />;

  return (
    <div className="relative bg-gradient-to-r from-purple-400 via-pink-300 to-fuchsia-400 min-h-screen text-white p-10 overflow-hidden">
      <h1 className="text-4xl font-extrabold mb-8 text-center relative z-10 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
        Dashboard
      </h1>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Subscription cards */}
        <div className="grid gap-6">
          {subscriptions.map((sub, idx) => (
            <SubscriptionCard key={idx} name={sub.name} renewalDate={sub.renewalDate} />
          ))}
        </div>

        {/* Chart */}
        <div className="bg-white/20 backdrop-blur-md shadow-xl rounded-xl p-6">
          <AnalyticsChart data={subscriptions} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;


