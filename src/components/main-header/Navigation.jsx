import { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../../context/loginContext";
import { LangContext } from "../../context/langContext";
import { useThemeDD } from "../../context/themaContext";

const Nav = styled.nav`

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    
  }

  li {
    margin: 0;
    margin-left: 2rem;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover,
    &:active {
      color: #f3cafb;
    }
  }

  button {
    font: inherit;
    /* background: #dd0db0; */
    /* border: 1px solid #dd0db0; */
    padding: 0.5rem 1.5rem;
    /* color: white; */
    cursor: pointer;
    background: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.background};

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;

    &:focus {
      outline: none;
    }

    &:hover,
    &:active {
      color: #f3cafb;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
    }
  }
`;

const Navigation = ({ changePage}) => {
  const exitContext = useContext(LoginContext);
  const langContext = useContext(LangContext)
  const { theme, changeTheme } = useThemeDD();
  return (
    <Nav>
      <ul>
      <li onClick={(e) => changePage(e, "counter")}>
          <a href="/">{langContext.lang === "EN" ? "counter" : langContext.lang === "RU" ? "счетчик" : "эсептегич"}</a>
        </li>
        <li onClick={(e) => changePage(e, "users")}>
          <a href="/">{langContext.lang === "EN" ? "users" : langContext.lang === "RU" ? "пользователи" : "колдонучулар"}</a>
        </li>
        <li onClick={(e) => changePage(e, "admin")}>
          <a href="/">{langContext.lang === "EN" ? "admin" : langContext.lang === "RU" ? "админ" : "админ"}</a>
        </li>
        <li onClick={(e) => changePage(e, "rick")}>
          <a href="/">Rick and Morti</a>
        </li>
        <li>
          <button onClick={() => langContext.changeLanguage("EN")}>EN</button>
        </li>
        <li>
          <button onClick={() => langContext.changeLanguage("RU")}>RU</button>
        </li>
        <li>
          <button onClick={() => langContext.changeLanguage("KG")}>KG</button>
        </li>
        <li>
          <button onClick={changeTheme}>{theme === "dark" ? "DARK" : "LIGHT"}</button>
        </li>
        <li>
          <button onClick={exitContext.exit}>Logout</button>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;




