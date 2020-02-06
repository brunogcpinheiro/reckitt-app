import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { firebaseAuth } from "../../firebase/init";
import { getUserData } from "../../store/actions/authActions";
import * as S from "./styles";

const Header = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const user = useSelector(state => state.auth.credentials);

  const logout = () => {
    //this.isLoading = true;
    firebaseAuth.signOut().then(() => {
      //this.isLoading = false;
      history.push("/");
    });
  };

  return (
    <S.HeaderWrapper>
      <div>
        <S.GreetWrapper>
          <h3>Bem vindo,</h3>
          <p>{user.name}!</p>
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
