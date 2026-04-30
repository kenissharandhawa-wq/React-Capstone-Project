function Home() {
  return (
    <div className="relative bg-gradient-to-r from-purple-400 via-pink-300 to-fuchsia-400 min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      
      
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-10 shadow-xl relative z-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]">
          Welcome to Subs-Dashboard
        </h1>
        <p className="mt-6 text-lg max-w-xl mx-auto">
          Track your subscriptions, analyze costs, and get renewal alerts.
        </p>
      </div>
    </div>
  );
}

export default Home;
