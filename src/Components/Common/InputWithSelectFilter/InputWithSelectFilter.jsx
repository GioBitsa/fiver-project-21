import React from "react";
import {
  MyInputContainer,
  SearchButton,
  MyInput,
  MySelectContainer,
} from "./Style";
import { Select, MenuItem } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

const InputWithSelectFilter = ({ sx }) => {
  return (
    <MyInputContainer sx={sx}>
      <SearchButton>
        <AiOutlineSearch />
      </SearchButton>
      <MyInput type="text" placeholder="Search test" />
      <MySelectContainer>
        <Select defaultValue={1}>
          <MenuItem value={1}>Filter</MenuItem>
          <MenuItem value={2}>first option</MenuItem>
          <MenuItem value={3}>second option</MenuItem>
          <MenuItem value={4}>third option</MenuItem>
        </Select>
      </MySelectContainer>
    </MyInputContainer>
  );
};

export default InputWithSelectFilter;
