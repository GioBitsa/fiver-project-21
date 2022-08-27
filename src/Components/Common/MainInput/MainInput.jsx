import React from "react";
import { InputContainer, MyInputLabel, MyInput } from "./Style";

const MainInput = ({ inputLabel, placeholder, onChange, value }) => {
  return (
    <InputContainer>
      <MyInputLabel htmlFor={inputLabel}>{inputLabel}</MyInputLabel>
      <MyInput
        id={inputLabel}
        placeholder={placeholder}
        inputProps={{ "aria-label": "description" }}
        onChange={onChange}
        value={value}
      />
    </InputContainer>
  );
};

export default MainInput;
