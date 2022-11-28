import { styled } from "@mui/system";
import { MainButton } from "../../../Components/Common";
import palette from "../../../Shared/palette";

export const MyButton = styled(MainButton)({
  backgroundColor: "#E8E8E8",
  color: palette.blackText,
  opacity: 0.6,
  whiteSpace: "nowrap",

  "&.active": {
    backgroundColor: palette.primary,
    color: palette.whiteText,
    opacity: 1,

    "&:hover": {
      backgroundColor: palette.primary,
    },
  },

  "&:hover": {
    backgroundColor: "#E8E8E8",
  },

  "@media screen and (max-width: 599px)": {
    flex: 1,
  },
});
