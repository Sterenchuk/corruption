// ./Components/Model.jsx/ModelWrapper.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Model from "./Model";

const ModelWrapper = (props) => {
  const navigate = useNavigate();
  return <Model {...props} navigate={navigate} />;
};

export default ModelWrapper;
