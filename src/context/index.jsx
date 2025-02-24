import { createContext, useState } from "react";

export const CounterContext = createContext(0);

export const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0);
    const minus = () => {
        setCounter((prevState) => prevState - 1)
    }
    const plus = () => {
        setCounter((prevState) => prevState + 1)
    }
return (
    <CounterContext.Provider value={{counter: counter, inc: plus, dec: minus}}>
    {children}
</CounterContext.Provider>
)
}