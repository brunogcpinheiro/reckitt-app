import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signupUser } from "../../store/actions/authActions";
import Logo from "../../assets/logo.png";
import * as S from "./styles";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password
    }

    dispatch(signupUser(newUser, history));
  };

  return (
    <S.SignupFormWrapper>
      <S.BackToHome>
        <S.BackLink to="/">
          <S.BackIcon />
          voltar
        </S.BackLink>
      </S.BackToHome>
      <img src={Logo} alt="Logo" />
      <S.MainTitleWrapper>
        <h1>Registro</h1>
      </S.MainTitleWrapper>
      <S.MainFormWrapper>
        <S.FormControlElement>
          <S.TextInputElement
            onChange={e => setName(e.target.value)}
            variant="outlined"
            type="text"
            label="nome completo"
          />
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
          <S.SignupButton onClick={handleSubmit} type="submit">
            Registrar
          </S.SignupButton>
        </S.FormControlElement>
      </S.MainFormWrapper>
    </S.SignupFormWrapper>
  );
};

export default SignupForm;
