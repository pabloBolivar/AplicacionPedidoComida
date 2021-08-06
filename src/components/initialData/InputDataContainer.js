import React from "react";
//import { useSelector } from 'react-redux';
import InputData from "./InputData";
import "./styles.css";

export default function InputDataContainer() {
  //const location = useSelector(state => {state.loQueElijan})
  //handleClick = e =>

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return <InputData onSubmit={handleSubmit} />;
}
