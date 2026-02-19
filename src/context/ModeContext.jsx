import React, { createContext, useState } from "react";

export const ModeContext = createContext(); 

export const ModeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ModeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ModeContext.Provider>
    );
};