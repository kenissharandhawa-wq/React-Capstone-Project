import { useState, useContext } from "react";
import { SubscriptionContext } from "../Context/SubscriptionContext";

function AddSubscriptionForm() {
  const { addSubscription } = useContext(SubscriptionContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [renewalDate, setRenewalDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    const newSub = {
      name: name,
      cost: Number(cost), 
      renewalDate: renewalDate
    };

    addSubscription(newSub);

    setName("");
    setCost("");
    setRenewalDate("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-2xl mt-6"
    >
      <h2 className="text-lg font-bold text-white mb-4">Add Subscription</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-4 p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
        required
      />

      <input
        type="number"
        placeholder="Cost (₹)"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        className="w-full mb-4 p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
        required
      />

      <input
        type="date"
        value={renewalDate}
        onChange={(e) => setRenewalDate(e.target.value)}
        className="w-full mb-4 p-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
        required
      />

    <button
  type="submit"
  className="bg-[#6367FF] hover:bg-[#8494FF] text-white px-6 py-2 rounded-full shadow-lg transition-all font-bold tracking-wide mt-2"
> Add
       </button>
    </form>
  );
}

export default AddSubscriptionForm;