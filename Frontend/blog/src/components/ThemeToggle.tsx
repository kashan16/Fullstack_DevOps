import { Switch } from "@mui/material";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [ darkMode , setDarkMode ] = useState(localStorage.getItem("theme") === "dark");

    useEffect(() => {
        document.documentElement.classList.toggle("dark",darkMode);
        localStorage.setItem("theme",darkMode ? "dark" : "light");
    },[darkMode]);

    return (
        <div className="flex items-center gap-2">
            <span>🌞</span>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
            <span>🌙</span>    
        </div>
    );
};

export default ThemeToggle;