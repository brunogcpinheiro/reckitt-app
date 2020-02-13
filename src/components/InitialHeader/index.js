import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  InputAdornment,
  FormControl,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import Today from "@material-ui/icons/Today";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { fetchStoresData, cleanUp } from "../../store/actions/storesActions";
import * as S from "./styles";

const InitialHeader = props => {
  const today = format(new Date(), "dd/MM/yyyy", { locale: ptBR });
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [selectValue, setSelectValue] = useState("");
  const storesData = useSelector(state => state.stores.storesInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  useEffect(() => {
    dispatch(fetchStoresData());

    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);

  function handleChange(e) {
    setSelectValue(e.target.value);
    console.log(e.target.value);
  }

  return (
    <S.InitialHeaderWrapper>
      <h1>1. Dados Iniciais</h1>
      <form>
        <FormControl>
          <S.Date
            disabled
            variant="outlined"
            value={today}
            label="Data de conferência:"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Today />
                </InputAdornment>
              )
            }}
          />
          <small>
            <strong>Obs.:</strong> As conferências devem ser realizadas no dia
            corrente.
          </small>
        </FormControl>
        <p>Selecione a loja a ser avaliada:</p>
        <FormControl variant="outlined">
          <InputLabel id="states" ref={inputLabel}>
            Loja...
          </InputLabel>

          <Select
            labelId="states"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectValue}
          >
            {storesData &&
              storesData.map(store => (
                <MenuItem key={store.nome} value={`${store.nome}`}>
                  {store.nome}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </form>
    </S.InitialHeaderWrapper>
  );
};

export default InitialHeader;
