import React from "react";
import { InputContainer, MySelect, MyInputLabel } from "./Style";
import { MenuItem } from "@mui/material";

const MainSelect = ({ placeholder, inputLabel, onChange, value }) => {
  return (
    <InputContainer>
      <MyInputLabel htmlFor={inputLabel}>{inputLabel}</MyInputLabel>
      <MySelect
        name={inputLabel}
        defaultValue={0}
        value={value}
        onChange={onChange}
        sx={value === 0 && { color: "rgba(0,0,0,0.4)" }}
      >
        <MenuItem value={0} disabled>
          {placeholder}
        </MenuItem>
        <MenuItem value={1}>RandomValue 1</MenuItem>
        <MenuItem value={2}>RandomValue 2</MenuItem>
        <MenuItem value={3}>RandomValue 3</MenuItem>
      </MySelect>
    </InputContainer>
  );
};

export default MainSelect;
