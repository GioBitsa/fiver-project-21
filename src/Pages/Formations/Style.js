import { styled } from "@mui/system";
import { Box } from "@mui/material";
import HeroImage from "../../Assets/Formations/HeroImage.png";
import palette from "../../Shared/palette";

export const HeroContainer = styled(Box)({
  backgroundImage: `url(${HeroImage})`,
  backgroundPosition: "top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "calc(100vh - 200px)",
  maxHeight: "800px",

  "@media screen and (max-width: 900px)": {
    backgroundImage: "initial",
    maxHeight: "initial",
  },
});

export const MyItem = styled(Box)({ flex: 1 });

export const ImageContainer = styled(Box)({
  position: "relative",
  marginBottom: "40px",

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    maxWidth: "400px",
    margin: "0 auto",
  },
});

export const SpanContainer = styled(Box)({
  position: "absolute",
  left: "50%",
  bottom: "-20px",
  width: "60px",
  height: "60px",
  transform: "translateX(-50%)",

  "& span": {
    width: "100%",
    height: "100%",
    backgroundColor: palette.lightPrimary,
    color: palette.whiteText,
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    position: "relative",
    zIndex: 1,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: "5px",
    left: "5px",
    width: "100%",
    height: "100%",
    backgroundColor: palette.primary,
    borderRadius: "5px",
  },

  "@media screen and (max-width: 900px)": {
    width: "40px",
    height: "40px",

    "& span": {
      fontSize: "20px",
    },
  },
});
