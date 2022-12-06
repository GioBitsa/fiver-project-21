import { MainDatePicker, MainSelect } from "../../../Components/Common";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import palette from "../../../Shared/palette";

export const EditedMainSelect = styled(MainSelect)({});

export const EditedMainDatePicker = styled(MainDatePicker)({});

export const TeamMemberCard = styled(Stack)({
  backgroundColor: palette.whiteText,
  padding: "20px",
  borderRadius: "20px",
  boxShadow: palette.boxShadow,
  maxWidth: "400px",
  margin: "0 auto",

  "& img": {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "100%",
  },

  "& h4": {
    color: palette.primary,
    fontSize: "16px",
    fontWeight: "600",
  },

  "& p": {
    color: palette.blackText,
    opacity: 0.6,
    fontSize: "14px",
    fontWeight: "300",
    marginTop: "8px !important",
  },
});
