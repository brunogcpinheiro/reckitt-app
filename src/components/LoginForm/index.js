import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { firebaseAuth } from "../../firebase/init";

import Logo from "../../assets/logo.png";
import * as S from "./styles";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    if (email && password) {
      firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          history.push("/initial");
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert("Please put your credentials!");
    }
  };

  return (
    <S.LoginFormWrapper>
      <img src={Logo} alt="Logo" />
      <S.MainTitleWrapper>
        <h1>Login</h1>
      </S.MainTitleWrapper>
      <S.MainFormWrapper>
        <S.FormControlElement>
          <S.TextInputElement
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
            type="text"
            label="email"
          />
          <S.TextInputElement
            onChange={e => setPassword(e.target.value)}
            variant="outlined"
            type="password"
            label="senha"
          />
          <S.LoginButton onClick={handleSubmit} type="submit">
            Entrar
          </S.LoginButton>
        </S.FormControlElement>
      </S.MainFormWrapper>
      <S.RegisterWrapper>
        <p>
          Ainda não é registrado?
          <span>
            <Link to="/signup">Clique aqui</Link>
          </span>
        </p>
      </S.RegisterWrapper>
    </S.LoginFormWrapper>
  );
};

export default LoginForm;
