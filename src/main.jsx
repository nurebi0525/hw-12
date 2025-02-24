import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LoginProvider } from "./context/loginContext.jsx";
import { LanguageProvider } from "./context/langContext.jsx";
import { ThemeProvider } from "./context/themaContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <LoginProvider>
        <ThemeProvider>
        <LanguageProvider>
        <App/>
        </LanguageProvider>
       
        </ThemeProvider>
    </LoginProvider>
);
