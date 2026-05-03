import { useState, useContext } from "react";
import { SubscriptionContext } from "../Context/SubscriptionContext";

function SubscriptionCard({ name, cost, renewalDate }) {
  const { deleteSubscription, updateSubscription } = useContext(SubscriptionContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editCost, setEditCost] = useState(cost);
  const [editDate, setEditDate] = useState(renewalDate);

  const bgClass = "bg-white/60 dark:bg-black/40 backdrop-blur-md border-white/50 dark:border-white/10";
  const handleSave = () => {
    updateSubscription(name, {
      name: editName,
      cost: Number(editCost),
      renewalDate: editDate,
    });
    setIsEditing(false);
  };

  return (
    <div className={`${bgClass} rounded-xl p-6 border shadow-xl transition-all duration-300 hover:shadow-[0_10px_25px_rgba(99,103,255,0.2)] dark:hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)] relative flex flex-col justify-between min-h-[160px]`}>
      {isEditing ? (
        <div className="flex flex-col gap-3">
          <input 
            type="text" 
            value={editName} 
            onChange={(e) => setEditName(e.target.value)} 
            className="w-full p-2 rounded bg-white/50 dark:bg-black/50 border border-white/40 dark:border-white/10 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6367FF]"
          />
          <input 
            type="number" 
            value={editCost} 
            onChange={(e) => setEditCost(e.target.value)} 
            className="w-full p-2 rounded bg-white/50 dark:bg-black/50 border border-white/40 dark:border-white/10 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6367FF]"
          />
          <input 
            type="date" 
            value={editDate} 
            onChange={(e) => setEditDate(e.target.value)} 
            className="w-full p-2 rounded bg-white/50 dark:bg-black/50 border border-white/40 dark:border-white/10 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6367FF]"
          />
          <div className="flex gap-2 mt-2">
            <button onClick={handleSave} className="flex-1 bg-[#10b981] hover:bg-[#059669] text-white py-1.5 rounded font-bold transition-colors">Save</button>
            <button onClick={() => setIsEditing(false)} className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-1.5 rounded font-bold transition-colors">Cancel</button>
          </div>
        </div>
      ) : (
        
        <>
          <div>
            <h2 className="text-xl font-bold text-[#6367FF] dark:text-[#a8b1ff]">{name}</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">Price: ₹{cost}</p>
            <p className="mt-1 text-gray-600 dark:text-gray-400">Renews: {renewalDate}</p>
          </div>
          
          <div className={`absolute top-4 right-4 flex gap-3 transition-opacity ${isEditing ? 'hidden' : 'opacity-0 group-hover:opacity-100'}`}>
            <button 
              onClick={() => setIsEditing(true)} 
              className="text-gray-400 hover:text-[#6367FF] transition-colors text-sm font-bold">Edit</button>
            <button 
              onClick={() => deleteSubscription(name)} 
              className="text-gray-400 hover:text-red-500 transition-colors text-sm font-bold">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default SubscriptionCard;
