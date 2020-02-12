import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import InitialHeader from "../components/InitialHeader";
import { fetchStoresData } from "../store/actions/storesActions";

const InitialPage = () => {
  const storesData = useSelector(state => state.stores.stores);
  const dispatch = useDispatch();

  console.log(storesData)

  useEffect(() => {
    dispatch(fetchStoresData())
  }, [dispatch])

  return (
    <>
      <InitialHeader />
    </>
  );
};

export default InitialPage;
