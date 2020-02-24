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

import { getUserData } from "../../store/actions/authActions";

import {
  fetchStoresData,
  cleanUp,
  fetchCityByStateId,
  fetchFlagsByCityId,
  fetchStoresByFlagId
} from "../../store/actions/initialActions";

import { removeAccents } from "../../utils/remove-accents";

import * as S from "./styles";

const InitialForm = () => {
  const today = format(new Date(), "dd/MM/yyyy", { locale: ptBR });
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [state, setState] = useState({
    state: "",
    city: "",
    flag: "",
    store: ""
  });
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

  const handleChange = (e, child) => {
    const { id } = child.props;
    setState({ ...state, [e.target.name]: e.target.value });
    let stateId = removeAccents(state.state)
      .trim()
      .toLowerCase()
      .replace(" ", "-");

    if (e.target.name === "state") dispatch(fetchCityByStateId(id));
    else if (e.target.name === "city")
      dispatch(fetchFlagsByCityId(stateId, id));
    else if (e.target.name === "flag") dispatch(fetchStoresByFlagId(id));
  };

  function saveInitialData(e) {
    e.preventDefault();

    const { name, email } = user;

    const data = {
      data: today,
      estado: state.state,
      cidade: state.city,
      bandeira: state.flag,
      loja: state.store,
      usuario: { name, email }
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
            ESTADO
          </InputLabel>

          <Select
            labelId="states"
            name="state"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={state.state}
            onOpen={() => setState({ ...state, city: "" })}
          >
            {statesData &&
              statesData.map(state => {
                return (
                  <MenuItem key={state._nome} value={state._nome} id={state.id}>
                    {state._nome}
                  </MenuItem>
                );
              })}
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
            name="city"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={state.city}
            disabled={!state.state}
            onOpen={() => setState({ ...state, flag: "" })}
          >
            {cities &&
              cities.map(city => (
                <MenuItem key={city._nome} value={city._nome} id={city.id}>
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
            name="flag"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={state.flag}
            disabled={!state.city}
            onOpen={() => setState({ ...state, store: "" })}
          >
            {flags &&
              flags.map(flag => (
                <MenuItem key={flag._nome} value={flag._nome} id={flag.id}>
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
            name="store"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={state.store}
            disabled={!state.flag}
          >
            {stores &&
              stores.map(store =>
                store.lojas.map(s => (
                  <MenuItem key={s._nome} value={s._nome} id={s.id}>
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
