import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../../Shared/palette";
import { CalendarPicker } from "@mui/x-date-pickers";

export const MyInputContainer = styled(Box)({
  position: "relative",
  width: "400px",
  height: "50px",

  "@media screen and (max-width: 600px)": {
    width: "100%",
  },
});

export const SearchButton = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "50px",
  height: "50px",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  "& svg": {
    color: palette.blackText,
    opacity: 0.6,
    width: "20px",
    height: "20px",
  },
});

export const MyInput = styled("input")({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  border: "none",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  padding: "15px 80px 15px 50px",
  borderRadius: "5px",
  color: palette.blackText,
  opacity: 0.6,
  fontSize: "14px",

  "&:focus": {
    outline: "none",
  },
});

export const MyCalendarPicker = styled(CalendarPicker)({
  width: "100%",
  maxWidth: "450px",
  margin: 0,
  border: "1px solid rgba(34, 34, 34, 0.1)",
  padding: "0 20px",
  borderRadius: "5px",

  "& .MuiDayPicker-header": {
    justifyContent: "space-between",
  },

  "& .MuiDayPicker-weekContainer": {
    justifyContent: "space-between",
  },

  "& button": {
    color: "#5F5F7D",
    fontSize: "15px",
  },

  "& button.Mui-selected": {
    color: palette.whiteText,
    background: palette.linearHorizontaly,
  },

  "@media screen and (max-width: 900px)": {
    "& button": {
      fontSize: "14px",
    },
  },
});
