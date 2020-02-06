import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getUserData, logoutUser } from "../../store/actions/authActions";
import * as S from "./styles";

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const user = useSelector(state => state.auth.credentials);
  const loading = useSelector(state => state.auth.loading);

  const logout = () => {
    dispatch(logoutUser(history));
  };

  return (
    <S.HeaderWrapper>
      <div>
        <S.GreetWrapper>
          <h3>Bem vindo,</h3>
          {loading ? <p>carregando nome...</p> : <p>{user.name}!</p>}
        </S.GreetWrapper>
      </div>
      <S.Logout onClick={logout}>
        <S.Icon />
        <span>Sair</span>
      </S.Logout>
    </S.HeaderWrapper>
  );
};

export default Header;
