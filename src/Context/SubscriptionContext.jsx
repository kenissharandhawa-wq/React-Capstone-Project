import { createContext, useState } from "react";
import UseLocalStorage from "../Hooks/UseLocalStorage";

export const SubscriptionContext = createContext();

export function SubscriptionProvider({ children }) {
  const [subscriptions, setSubscriptions] = UseLocalStorage("subscriptions_data", [
    { name: "Netflix", cost: 199, renewalDate: "2026-05-15" },
    { name: "Spotify", cost: 99, renewalDate: "2026-05-20" },
    { name: "Jio+Hotstar", cost: 399, renewalDate: "2026-05-25" }
  ]);

  const [loading, setLoading] = useState(false);
  const addSubscription = (newSub) => {
    setSubscriptions((prev) => [...prev, newSub]);
  };
  const deleteSubscription = (nameToDelete) => {
    setSubscriptions((prev) => prev.filter((sub) => sub.name !== nameToDelete));
  };
  const updateSubscription = (oldName, updatedData) => {
    setSubscriptions((prev) =>
      prev.map((sub) => (sub.name === oldName ? updatedData : sub))
    );
  };

  return (
    <SubscriptionContext.Provider value={{ subscriptions, loading, addSubscription, deleteSubscription, updateSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
}