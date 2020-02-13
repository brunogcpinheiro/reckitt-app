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

import {
  fetchStoresData,
  cleanUp,
  fetchCityByStateId
} from "../../store/actions/storesActions";
import * as S from "./styles";

const InitialHeader = () => {
  const today = format(new Date(), "dd/MM/yyyy", { locale: ptBR });
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [disabledField, setDisabledField] = useState(true);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const storesData = useSelector(state => state.stores.storesInfo);
  const cityData = useSelector(state => state.stores.cities);
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
    if (e.target.name === "states") {
      setSelectedState(e.target.value);
      setDisabledField(false);
      dispatch(fetchCityByStateId(e.target.value));
    } else if (e.target.name === "cities") {
      setSelectedCity(e.target.value);
    }
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
            ESTADO...
          </InputLabel>

          <Select
            labelId="states"
            name="states"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedState}
            onOpen={() => setSelectedCity("")}
          >
            {storesData &&
              storesData.map(store => (
                <MenuItem key={store._nome} value={`${store._nome}`}>
                  {store._nome}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <br />
        <br />
        <br />

        <FormControl variant="outlined">
          <InputLabel id="cities" ref={inputLabel}>
            CIDADE...
          </InputLabel>

          <Select
            labelId="cities"
            name="cities"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedCity}
            disabled={disabledField}
          >
            {cityData &&
              cityData.map(city =>
                city.cidades.map(c => (
                  <MenuItem key={c._nome} value={`${c._nome}`}>
                    {c._nome}
                  </MenuItem>
                ))
              )}
          </Select>
        </FormControl>
      </form>
    </S.InitialHeaderWrapper>
  );
};

export default InitialHeader;
