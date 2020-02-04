import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.png";
import * as S from "./styles";

const LoginForm = () => {
  return (
    <S.LoginFormWrapper>
      <img src={Logo} alt="Logo" />
      <S.MainTitleWrapper>
        <h1>Login</h1>
      </S.MainTitleWrapper>
      <S.MainFormWrapper>
        <S.FormControlElement>
          <S.TextInputElement variant="outlined" type="text" label="email" />
          <S.TextInputElement
            variant="outlined"
            type="password"
            label="senha"
          />
          <S.LoginButton type="submit">Entrar</S.LoginButton>
        </S.FormControlElement>
        {/* <p v-if="feedback" class="error--message">{{ feedback }}</p> */}
        {/* <loading
          :active="isLoading"
          :is-full-page="fullPage"
          color="#db338f"
          loader="dots"
        /> */}
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
