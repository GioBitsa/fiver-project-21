import React, { useState } from "react";
import { TextField } from "@mui/material";
import { InputContainer, MyInputLabel, MyDesktopDatePicker } from "./Style";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const MainDatePicker = ({ inputLabel, onChange }) => {
  const [value, setValue] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <InputContainer>
        <MyInputLabel htmlFor={inputLabel}>{inputLabel}</MyInputLabel>
        <MyDesktopDatePicker
          name={inputLabel}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </InputContainer>
    </LocalizationProvider>
  );
};

export default MainDatePicker;
