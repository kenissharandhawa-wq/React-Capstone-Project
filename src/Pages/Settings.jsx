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
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <label className="flex items-center gap-2">
        <input type="checkbox" onChange={toggleDarkMode} />
        Enable Dark Mode
      </label>
    </div>
  );
}

export default Settings;

