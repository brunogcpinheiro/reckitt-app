import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import bcrypt from "bcryptjs";
import slugify from "slugify";

import { firebaseAuth, firebaseStore } from "../../firebase/init";

import Logo from "../../assets/logo.png";
import * as S from "./styles";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    if (name && email && password) {
      let slug = slugify(name, {
        replacement: "-",
        remove: /[$*_+~.()'"!\-:@]/g,
        lower: true,
      });

      let ref = firebaseStore.collection("users").doc(slug);

      ref.get().then(doc => {
        if (doc.exists) {
          alert("Usuário já cadastrado!");
        } else {
          firebaseAuth
            .createUserWithEmailAndPassword(email, password)
            .then(cred => {
              const hash = bcrypt.hashSync(password, 3);
              ref
                .set({
                  name,
                  email,
                  password: hash,
                  isAdmin: false,
                  user_id: cred.user.uid,
                })
                .then(() => {
                  history.push("/");
                });
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    } else {
      alert("Complete all fields!");
    }
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
