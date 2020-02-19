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

import {
  fetchStoresData,
  cleanUp,
  fetchCityByStateId,
  fetchFlagsByCityId,
  fetchStoresByFlagId,
} from "../../store/actions/storesActions";
import * as S from "./styles";

const InitialHeader = () => {
  const today = format(new Date(), "dd/MM/yyyy", { locale: ptBR });
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  const [disabledField, setDisabledField] = useState(true);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedFlag, setSelectedFlag] = useState("");
  const [selectedStore, setSelectedStore] = useState("");
  const storesData = useSelector(state => state.stores.storesInfo);
  const citiesFromState = useSelector(state => state.stores.citiesFromState);
  const flagsFromCity = useSelector(state => state.stores.flagsFromCity);
  const storesFromFlag = useSelector(state => state.stores.storesFromFlag);
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
      dispatch(fetchFlagsByCityId(selectedState, e.target.value));
    } else if (e.target.name === "flags") {
      setSelectedFlag(e.target.value);
      dispatch(fetchStoresByFlagId(e.target.value));
    } else if (e.target.name === "stores") {
      setSelectedStore(e.target.value);
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
            ESTADO...
          </InputLabel>

          <Select
            labelId="states"
            name="states"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedState}
            onOpen={() => setSelectedCity("")}>
            {storesData &&
              storesData.map(state => (
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
            CIDADE...
          </InputLabel>

          <Select
            labelId="cities"
            name="cities"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedCity}
            disabled={disabledField}
            onOpen={() => setSelectedFlag("")}>
            {citiesFromState &&
              citiesFromState.map(city => (
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
            BANDEIRA...
          </InputLabel>

          <Select
            labelId="flags"
            name="flags"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedFlag}
            disabled={disabledField}
            onOpen={() => setSelectedStore("")}>
            {flagsFromCity &&
              flagsFromCity.map(flag => (
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
            LOJA...
          </InputLabel>

          <Select
            labelId="stores"
            name="stores"
            onChange={handleChange}
            labelWidth={labelWidth}
            value={selectedStore}
            disabled={disabledField}>
            {storesFromFlag &&
              storesFromFlag.map(store =>
                store.lojas.map(s => (
                  <MenuItem key={s._nome} value={`${s._nome}`}>
                    {s._nome}
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
