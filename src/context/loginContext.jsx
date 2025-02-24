import { createContext, useState, } from "react";
import { useEffect } from "react";

export const LoginContext = createContext({isLoggedIn: false});


export const LoginProvider = ({children}) => {
    const [hasAcces, setHasAccess] = useState(false);
      const [userName, setUserName] = useState({});
    

    const logoutHandler = () => {
        setHasAccess(false)
            localStorage.removeItem("auth");
        }
  useEffect(() => {
    const isHasAccount = JSON.parse(localStorage.getItem("auth"));
    if(isHasAccount?.email && isHasAccount.password) {
      setUserName(isHasAccount);
      setHasAccess(true)
    }
  }, [])
        
  const loginHandler = (email, password) => {
    // setUserName({ email: email, password: password });
    setHasAccess(true);
    localStorage.setItem("auth", JSON.stringify({ email: email, password: password }));
  };
    
return <LoginContext.Provider value={{hasAccess: hasAcces, exit: logoutHandler, signIn: loginHandler, usesrName: userName}}>
    {children}
</LoginContext.Provider>
}