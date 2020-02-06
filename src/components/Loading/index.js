import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <ReactLoading
    type={"bubble"}
    color={"#db338f"}
    height={"100vh"}
    width={"100vw"}
  />
);

export default Loading;
