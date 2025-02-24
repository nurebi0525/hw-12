import styled from "styled-components";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useRef, useState } from "react";

const Login = ({onLogin}) => {
  const [enteredEmail, setEnteredEmail] = useState("")
  const [enteredPassword, setEnteredPassword] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailIsvalid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true)

  function emailChangeHandler(event) {
    setEnteredEmail(event.target.value);
    setFormIsValid(event.target.value.includes("@") && enteredPassword.trim().length > 6)
  }

  function passwordChangeHandler(event) {
    setEnteredPassword(event.target.value);
    setFormIsValid(event.target.value.trim().length > 6 && enteredEmail.includes("@"))
  }

  function validateEmailHandler() {
    setEmailIsValid(enteredEmail.includes("@"))
  }

  function validatePasswordHandler() {
    setPasswordIsValid(enteredPassword.trim().length > 6)
  }
  
  function onSubmit(event) {
    event.preventDefault();
    onLogin(enteredEmail, enteredPassword)
  }
  
  
  return (
    <StyledLoginWrapper>
      <form onSubmit={onSubmit}>
        <ControlWrapper className={!emailIsvalid ? "invalid" : ""}>
          <StyledLable htmlFor="email">E-Mail</StyledLable>
          <StyledInput  type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailHandler}/>
        </ControlWrapper>
        <ControlWrapper className={!passwordIsValid ? "invalid" : ""}>
          <StyledLable htmlFor="password">Password</StyledLable>
          <StyledInput type="password" id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}/>
        </ControlWrapper>
        <StyledActions>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </StyledActions>
      </form>
    </StyledLoginWrapper>
  );
};

export default Login;

const StyledLoginWrapper = styled(Card)`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  padding: 2rem;
`;

const StyledLable = styled.label`
  display: block;
  font-weight: bold;
  flex: 1;
  color: #464646;
  margin-bottom: 0.5rem;
`;

const StyledActions = styled.div`
  text-align: center;
`;
const StyledInput = styled.input`
  display: block;
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const ControlWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  align-items: stretch;
  flex-direction: column;

  input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }

  &.invalid input {
    border-color: red;
    background: #fbdada;
  }
`;
