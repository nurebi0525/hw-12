import React, { useContext, useEffect, useState } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import MainHeader from "./components/main-header/MainHeader";
import { Users } from "./components/users/users";
import { Cards } from "./components/card/card";
import { Counter } from "./components/example";
import { CounterProvider } from "./context";
import { LoginContext } from "./context/loginContext";
import styled from "styled-components";
import { useThemeDD } from "./context/themaContext";

function App() {
  const [page, setPage] = useState("admin");
  const {theme, chancheTheme} = useThemeDD("dark")

  const authContext = useContext(LoginContext)

  const loginHandler = (email, password) => {
    authContext.signIn(email, password)
  };


  function navigateTo(event, param) {
    event.preventDefault();
    setPage(param);
  }

  return (
    <Container>
      <MainHeader isLoggedIn={authContext.hasAccess} changePage={navigateTo}/>
      <main>
        {!authContext.hasAccess && <Login onLogin={loginHandler} />}
        {authContext.hasAccess&& page === "admin" && <Home />}
        {authContext.hasAccess&& page === "users" && <Users/>}
        {authContext.hasAccess&& page === "rick" && <Cards/>}
        {authContext.hasAccess&& page === "counter" && (<CounterProvider><Counter/></CounterProvider>)}
      </main>
    </Container>
  );
}

export default App;

const Container = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
`