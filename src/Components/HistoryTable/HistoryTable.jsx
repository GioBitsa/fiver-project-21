import React from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { MyInputContainer, MyInput, FilterButton, SearchButton } from "./Style";
import palette from "../../Shared/palette";

const HistoryTable = () => {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontSize: "24px",
            fontWeight: "500",
            my: 2,
          }}
        >
          Mon historique
        </Typography>
        <IconButton
          disableRipple
          sx={{
            backgroundColor: palette.primary,
            color: palette.whiteText,
            borderRadius: "10px",
          }}
        >
          <AiOutlinePlus />
        </IconButton>
      </Stack>
      <MyInputContainer>
        <SearchButton>
          <AiOutlineSearch />
        </SearchButton>
        <MyInput type="text" placeholder="Search test" />
        <FilterButton>
          <BsFilter />
        </FilterButton>
      </MyInputContainer>
    </>
  );
};

export default HistoryTable;
