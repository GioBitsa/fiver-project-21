import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import palette from "../../../Shared/palette";

export const Item = styled(Box)({
  padding: "30px",
  backgroundColor: palette.whiteText,
  borderRadius: "5px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
  marginBottom: "24px",

  "& h3": {
    color: palette.primary,
    fontSize: "20px",
    fontWeight: 500,
  },

  "@media screen and (max-width: 900px)": {
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "1px solid rgba(34, 34, 34, 0.2)",
  },

  "@media screen and (max-width: 450px)": {
    padding: "30px 20px",
  },
});

export const DatesContainer = styled(Stack)({
  marginTop: "20px",
  cursor: "pointer",

  "& p": {
    color: palette.blackText,
    opacity: 0.8,
    fontSize: "14px",
  },

  "& p:nth-of-type(1)": {
    width: "50px",
  },

  "& p:nth-of-type(2)": {
    flex: 1,
  },

  "& p:nth-of-type(3)": {
    display: "none",
    fontSize: "12px",
    textDecoration: "underline",
  },

  "&.active p": {
    fontWeight: "500",
    color: palette.primary,
  },

  "&.active p:nth-of-type(3)": {
    display: "block",
  },

  "@media screen and (max-width: 900px)": {
    top: "0",
    marginBottom: "20px",

    "& p": {
      fontSize: "12px",
    },

    "& p:nth-of-type(3)": {
      fontSize: "10px",
    },
  },
});
