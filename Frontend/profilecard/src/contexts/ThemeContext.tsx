import { createContext, ReactNode, useContext, useState } from "react";

type ThemeContextType = {
    theme : boolean;
    toggleTheme : () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children } : { children : ReactNode}) => {
    const [ theme , setTheme ] = useState<boolean>(false);

    const toggleTheme = () => {
        setTheme((prevTheme) => !prevTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme , toggleTheme }}>
            <div className={ theme ? "bg-white text-black" : "bg-gray-900 text-white"}>
                { children }
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error("useTheme must be used within a ThemeProvider")
    }
    return context;
}