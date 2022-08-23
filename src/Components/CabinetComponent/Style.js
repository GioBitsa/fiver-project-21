import { styled } from "@mui/system";
import palette from "../../Shared/palette";
import { Box, Typography } from "@mui/material";

export const Header = styled(Typography)({
  color: palette.primary,
  fontSize: "30px",
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: "20px",

  "@media screen and (max-width: 768px)": {
    fontSize: "24px",
  },
  "@media screen and (max-width: 500px)": {
    fontSize: "18px",
  },
});

export const MyGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "20px",

  "& .mainImage": {
    gridColumnStart: 2,
    gridColumnEnd: 5,
    gridRowStart: 2,
    gridRowEnd: 4,
  },

  "& .mainImage > div": {
    width: "100%",
    height: "100%",
  },

  "& .mainImage img": {
    width: "100%",
  },

  "@media screen and (max-width: 768px)": {
    display: "none",
  },
});

export const IconName = styled(Typography)({
  color: palette.blackText,
  fontWeight: 600,
  marginTop: "10px",
  textAlign: "center",
});

export const IconContainer = styled(Box)({
  width: "50px",
  height: "50px",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});

export const SmallDevideImage = styled(Box)({
  display: "none",

  "& img": {
    display: "block",
    margin: "0 auto",
    width: "100%",
    maxWidth: "500px",
  },

  "@media screen and (max-width: 768px)": {
    display: "block",
  },
});

export const DetailsParagraph = styled(Typography)({
  marginTop: "20px",
  color: palette.blackText,

  "@media screen and (max-width: 600px)": {
    fontSize: "14px",
  },
});
