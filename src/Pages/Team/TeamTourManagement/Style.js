import { styled } from "@mui/system";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import palette from "../../../Shared/palette";

export const MyDesktopDatePicker = styled(DesktopDatePicker)({
  backgroundColor: palette.whiteText,
  borderRadius: "5px",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.06)",
  marginBottom: "24px",

  "& input": {
    color: "rgba(34, 34, 34, 0.8)",
  },

  "& fieldset": {
    border: "none",
  },
});
