import { useState, useEffect } from "react";

function Settings() {
  const toggleDarkMode = (e) => {
    if (e.target.checked) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#FFDBFD] via-[#C9BEFF] to-[#8494FF] dark:from-gray-900 dark:via-[#2d224a] dark:to-gray-950 min-h-screen text-gray-800 dark:text-gray-200 p-10 flex justify-center transition-colors duration-500">
   
      <div className="bg-white/60 dark:bg-black/40 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-xl rounded-xl p-8 w-full max-w-md h-fit mt-10 transition-colors duration-500">
        
        <h1 className="text-3xl font-bold mb-6 text-[#6367FF] dark:text-[#a8b1ff]">Settings</h1>
        
        <label className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-300 cursor-pointer hover:text-[#6367FF] dark:hover:text-[#a8b1ff] transition-colors font-medium">
          <input 
            type="checkbox" 
            onChange={toggleDarkMode} 
            className="w-5 h-5 accent-[#6367FF] dark:accent-[#a8b1ff] cursor-pointer"
          />
          Enable Dark Mode
        </label>

      </div>
    </div>
  );
}

export default Settings;
