import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const MyTableContainer = styled(Box)({
  marginTop: "20px",

  "& th, td": {
    paddingLeft: 0,
    textAlign: "left",
  },

  "& tbody th, tbody td": {
    border: "none",
  },
});

export const DoctorDetails = styled(Stack)({
  "& img": {
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },

  "& h6": {
    color: palette.blackText,
    fontSize: "16px",
    fontWeight: 500,
  },

  "& p": {
    color: palette.blackText,
    fontSize: "12px",
    opacity: 0.5,
  },
});

export const DateDetails = styled(Box)({
  "& h6": {
    color: palette.blackText,
    fontSize: "16px",
    fontWeight: 500,
  },

  "& p": {
    color: palette.blackText,
    fontSize: "12px",
    opacity: 0.5,
  },
});
