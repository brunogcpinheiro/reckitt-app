import React from "react";

import * as S from "./styles";

const NotLogged = () => {
  return (
    <S.BackToLogWrapper>
      <S.ErrorIcon style={{ fontSize: "100" }} />
      <p>Você precisa estar logado para acessar o conteúdo! Clique abaixo:</p>
      <S.BackToLog to="/">Logar</S.BackToLog>
      <p>Ou crie uma nova conta:</p>
      <S.BackToLog to="/signup">Registrar</S.BackToLog>
    </S.BackToLogWrapper>
  );
};

export default NotLogged;
