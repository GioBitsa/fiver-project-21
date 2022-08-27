import React, { useState } from "react";
import { InputContainer, MyInputLabel, MyInput } from "./Style";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { InputAdornment, IconButton } from "@mui/material";

const InputPassword = ({ inputLabel, placeholder, onChange, value }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <InputContainer>
      <MyInputLabel htmlFor={inputLabel}>{inputLabel}</MyInputLabel>
      <MyInput
        id={inputLabel}
        type={showPassword ? "text" : "password"}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={handleMouseDownPassword}
              disableRipple
            >
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </IconButton>
          </InputAdornment>
        }
      />
    </InputContainer>
  );
};

export default InputPassword;
