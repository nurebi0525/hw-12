import { createContext, useContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const lightTheme = {
    background: "#ffffff",
    text: "#000000",
};

const darkTheme = {
    background: "#1a1a1a",
    text: "#ffffff",
};

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const changeTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));    }
    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            <StyledThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}

export const  useThemeDD = () => useContext(ThemeContext);