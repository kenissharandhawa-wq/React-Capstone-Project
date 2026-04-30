import { createContext, useState } from "react";

export const SubscriptionContext = createContext();

export function SubscriptionProvider({ children }) {
  const [subscriptions, setSubscriptions] = useState([
    { name: "Netflix", cost: 199, renewalDate: "2026-05-15" },
    { name: "Spotify", cost: 99, renewalDate: "2026-05-20" },
    { name: "Disney+", cost: 399, renewalDate: "2026-05-25" }
  ]);

  const [loading, setLoading] = useState(false);

  // Function to add new subscription
  const addSubscription = (newSub) => {
    setSubscriptions((prev) => [...prev, newSub]);
  };

  return (
    <SubscriptionContext.Provider value={{ subscriptions, loading, addSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
}
