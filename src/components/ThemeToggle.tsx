
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // On mount, check localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
        document.body.style.backgroundColor = "#2B2B2B";
        document.body.style.color = "#ffffff";
      } else {
        document.documentElement.classList.remove("dark");
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#2B2B2B";
      }
    } else {
      // use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
        document.body.style.backgroundColor = "#2B2B2B";
        document.body.style.color = "#ffffff";
      } else {
        setTheme("light");
        document.documentElement.classList.remove("dark");
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#2B2B2B";
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#2B2B2B";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      document.body.style.backgroundColor = "#2B2B2B";
      document.body.style.color = "#ffffff";
    }
  };

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="p-2 rounded-md text-[#2B2B2B] hover:text-[#555555] focus:outline-none focus:ring-2 focus:ring-[#2B2B2B] transition-colors"
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
