import { useState } from "react";

function AddSubscriptionForm() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [renewalDate, setRenewalDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log values instead of adding
    console.log("Form submitted:", { name, cost, renewalDate });

    // Reset form
    setName("");
    setCost("");
    setRenewalDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 backdrop-blur-md rounded-xl p-6 shadow-md mt-6"
    >
      <h2 className="text-lg font-bold text-gray-900 mb-4">Add Subscription</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-3 p-2 rounded"
      />

      <input
        type="number"
        placeholder="Cost (₹)"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        className="w-full mb-3 p-2 rounded"
      />

      <input
        type="date"
        value={renewalDate}
        onChange={(e) => setRenewalDate(e.target.value)}
        className="w-full mb-3 p-2 rounded"
      />

      <button
        type="submit"
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-pink-400/50"
      >
        Add
      </button>
    </form>
  );
}

export default AddSubscriptionForm;
