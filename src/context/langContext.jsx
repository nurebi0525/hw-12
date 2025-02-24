import { createContext, useState } from "react";


export const LangContext = createContext({lang: "EN"})

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState("EN")

    function languageHandler (param) {
        setLang(param)
    }
    return <LangContext.Provider value={{lang: lang, changeLanguage: languageHandler}}>
        {children}
    </LangContext.Provider>
}