import React from "react";
import { MyInputContainer, SearchButton, MyInput } from "./Style";
import { AiOutlineSearch } from "react-icons/ai";

const MySearchInput = () => {
  return (
    <MyInputContainer>
      <SearchButton>
        <AiOutlineSearch />
      </SearchButton>
      <MyInput type="text" placeholder="Search test" />
    </MyInputContainer>
  );
};

export default MySearchInput;
