import { createContext } from "react";
const themes = {
    
    color: "#ffffff",
    background: "#555555",
    border: "1px solid #222222",
    padding: "10px"
};

const ThemeContext = createContext(null);

export { themes };
export default ThemeContext;
