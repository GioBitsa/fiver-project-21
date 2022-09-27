import { styled } from "@mui/system";
import palette from "../../../Shared/palette";
import { CalendarPicker } from "@mui/x-date-pickers";

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
