import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative bg-gradient-to-br from-[#FFDBFD] via-[#C9BEFF] to-[#8494FF] dark:from-gray-900 dark:via-[#2d224a] dark:to-gray-950 min-h-screen flex flex-col items-center justify-center text-gray-800 dark:text-gray-200 p-6 overflow-hidden transition-colors duration-500">
      <div className="bg-white/60 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl relative z-10 text-center max-w-4xl w-full transition-colors duration-500">
        
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-[#6367FF] dark:text-[#a8b1ff] drop-shadow-sm mb-6 transition-colors duration-500">
          Welcome to SubSync
        </h1>
        
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium transition-colors duration-500">
          Take control of your recurring expenses. Track your subscriptions, analyze your monthly costs, and never miss a renewal date again.
        </p>

        <Link
          to="/dashboard"
          className="inline-block bg-[#6367FF] hover:bg-[#8494FF] dark:hover:bg-[#a8b1ff] text-white font-bold text-lg px-10 py-4 rounded-full shadow-[0_10px_20px_rgba(99,103,255,0.3)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all transform hover:-translate-y-1 mb-12"
        >
          Go to Dashboard
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-6 border border-white/40 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-500">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="font-bold text-[#6367FF] dark:text-[#a8b1ff] text-lg mb-2 transition-colors duration-500">Analyze Costs</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors duration-500">Visualize your spending habits with interactive, real-time pie charts.</p>
          </div>

          <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-6 border border-white/40 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-500">
             <div className="text-3xl mb-3">🔔</div>
            <h3 className="font-bold text-[#6367FF] dark:text-[#a8b1ff] text-lg mb-2 transition-colors duration-500">Renewal Alerts</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors duration-500">Keep track of upcoming billing dates so you never overpay accidentally.</p>
          </div>

          <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-6 border border-white/40 dark:border-white/10 shadow-sm hover:shadow-md transition-all duration-500">
             <div className="text-3xl mb-3">💼</div>
            <h3 className="font-bold text-[#6367FF] dark:text-[#a8b1ff] text-lg mb-2 transition-colors duration-500">Easy Management</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium transition-colors duration-500">Add, edit, and organize all your digital plans in one centralized place.</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;