import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { firebaseStore, firebaseAuth } from "../../firebase/init";
import * as S from "./styles";

const Header = () => {
  let history = useHistory();
  const [user, setUser] = useState("");

  useEffect(() => {
    let authUser = firebaseAuth.currentUser;
    firebaseStore
      .collection("users")
      .where("user_id", "==", authUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          setUser(doc.data().name);
        });
      });
  }, []);

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
          <p>{user}!</p>
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
