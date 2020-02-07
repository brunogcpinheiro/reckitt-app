import React from "react";
import { InputAdornment } from "@material-ui/core";
import Today from "@material-ui/icons/Today";

import * as S from "./styles";

const InitialHeader = () => {
  return (
    <S.InitialHeaderWrapper>
      <S.Date
        disabled
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Today />
            </InputAdornment>
          ),
        }}
      />
      <p>Por favor, escolha a loja a ser avaliada:</p>
    </S.InitialHeaderWrapper>
  );
};

export default InitialHeader;
