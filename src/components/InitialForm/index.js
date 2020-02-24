import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  InputAdornment,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import Today from "@material-ui/icons/Today";
import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import { getUserData } from "../../store/actions/authActions";

import {
  fetchStoresData,
  cleanUp,
  fetchCityByStateId,
  fetchFlagsByCityId,
  fetchStoresByFlagId,
} from "../../store/actions/initialActions";
import * as S from "./styles";

const InitialForm = () => {
  const today = format(new Date(), "dd/MM/yyyy", { locale: ptBR });
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("");
  const [selectedStore, setSelectedStore] = useState("");
  const user = useSelector(state => state.auth.credentials);
  const statesData = useSelector(state => state.initial.statesData);
  const cities = useSelector(state => state.initial.citiesData);
  const flags = useSelector(state => state.initial.flagsData);
  const stores = useSelector(state => state.initial.storesData);
  const dispatch = useDispatch();

  useEffect(() => {
    setLabelWidth(100);
  }, []);

  useEffect(() => {
    dispatch(fetchStoresData());

    return () => {
      dispatch(cleanUp());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  function handleChange(e) {
    if (e.target.name === "states") {
      setSelectedState(e.target.value);
      dispatch(fetchCityByStateId(e.target.value));
    } else if (e.target.name === "cities") {
      setSelectedCity(e.target.value);
      dispatch(fetchFlagsByCityId(selectedState, e.target.value));
    } else if (e.target.name === "flags") {
      setSelectedFlag(e.target.value);
      dispatch(fetchStoresByFlagId(e.target.value));
    } else if (e.target.name === "stores") {
      setSelectedStore(e.target.value);
    }
  }

  function saveInitialData(e) {
    e.preventDefault();

    const { name, email } = user;

    const data = {
      date: today,
      state: selectedState,
      city: selectedCity,
      flag: selectedFlag,
      store: selectedStore,
      user: { name, email },
    };

    console.log(data);
  }

  return (
    <S.InitialFormWrapper>
      <h2>1. Dados Iniciais</h2>
      <form onSubmit={saveInitialData}>
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
              ),
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
            ESTADO
          </InputLabel>

          <Select
            labelId="states"
            name="states"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedState}
            onOpen={() => setSelectedCity("")}>
            {statesData &&
              statesData.map(state => (
                <MenuItem key={state._nome} value={`${state.id}`}>
                  {state._nome}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <br />
        <br />

        <FormControl variant="outlined">
          <InputLabel id="cities" ref={inputLabel}>
            CIDADE
          </InputLabel>

          <Select
            labelId="cities"
            name="cities"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedCity}
            disabled={!selectedState}
            onOpen={() => setSelectedFlag("")}>
            {cities &&
              cities.map(city => (
                <MenuItem key={city._nome} value={`${city.id}`}>
                  {city._nome}
                </MenuItem>
              ))}
            }
          </Select>
        </FormControl>

        <br />
        <br />

        <FormControl variant="outlined">
          <InputLabel id="flags" ref={inputLabel}>
            BANDEIRA
          </InputLabel>

          <Select
            labelId="flags"
            name="flags"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedFlag}
            disabled={!selectedCity}
            onOpen={() => setSelectedStore("")}>
            {flags &&
              flags.map(flag => (
                <MenuItem key={flag._nome} value={`${flag.id}`}>
                  {flag._nome}
                </MenuItem>
              ))}
            }
          </Select>
        </FormControl>

        <br />
        <br />

        <FormControl variant="outlined">
          <InputLabel id="stores" ref={inputLabel}>
            LOJA
          </InputLabel>

          <Select
            labelId="stores"
            name="stores"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedStore}
            disabled={!selectedFlag}>
            {stores &&
              stores.map(store =>
                store.lojas.map(s => (
                  <MenuItem key={s._nome} value={`${s._nome}`}>
                    {s._nome}
                  </MenuItem>
                ))
              )}
          </Select>
        </FormControl>

        <S.SubmitButton type="submit">Salvar e continuar</S.SubmitButton>
      </form>
    </S.InitialFormWrapper>
  );
};

export default InitialForm;
