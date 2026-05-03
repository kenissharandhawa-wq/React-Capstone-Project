import { useContext } from "react";
import { SubscriptionContext } from "../Context/SubscriptionContext";
import SubscriptionCard from "../Components/SubscriptionCard";
import AnalyticsChart from "../Components/AnalyticsChart";
import AddSubscriptionForm from "../Components/AddSubscriptionForm"; 
import Loader from "../Components/Loader";

function DashBoard() {
  const { subscriptions, loading } = useContext(SubscriptionContext);

  if (loading) return <Loader />;

  return (
    <div className="relative bg-gradient-to-br from-[#FFDBFD] via-[#C9BEFF] to-[#8494FF] dark:from-gray-900 dark:via-[#2d224a] dark:to-gray-950 min-h-screen transition-colors duration-500 overflow-hidden">
      <h1 className="text-4xl font-extrabold mb-8 pt-6 text-center relative z-10 text-[#6367FF] dark:text-[#a8b1ff] drop-shadow-sm">Dashboard</h1>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-10 pb-10">
        <div className="grid gap-6">
          {subscriptions.map((sub, idx) => (
            <div key={idx} className="group relative">
              <SubscriptionCard
                name={sub.name}
                cost={sub.cost}            
                renewalDate={sub.renewalDate}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
           <div className="bg-white/60 dark:bg-black/40 backdrop-blur-lg border border-white/50 dark:border-white/10 shadow-2xl rounded-xl p-6 flex justify-center items-center transition-colors duration-500">
             <AnalyticsChart data={subscriptions} />
           </div>
           
           <AddSubscriptionForm /> 
        </div>
      </div>
    </div>
  );
}

export default DashBoard;


