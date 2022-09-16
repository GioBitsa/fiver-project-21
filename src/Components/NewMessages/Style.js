import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const NewMessageItem = styled(Stack)({
  margin: "20px 0",
  padding: "10px 20px",
  borderRadius: "5px",

  "@media screen and (max-width: 600px)": {
    padding: "5px 0",
  },
});

export const AddresseeDetails = styled(Stack)({
  "& img": {
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },

  "& h6": {
    color: palette.darkGrey,
    fontSize: "16px",
    fontWeight: 500,
  },

  "& p": {
    color: palette.darkGrey,
    fontSize: "12px",
    opacity: 0.5,
  },
});

export const MessageDetails = styled(Stack)({
  "& p": {
    color: palette.darkGrey,
    fontSize: "12px",
  },

  "& span": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "23px",
    height: "20px",
    backgroundColor: palette.primary,
    color: palette.whiteText,
    fontSize: "14px",
    borderRadius: "25px",
    marginTop: "5px",
  },
});
