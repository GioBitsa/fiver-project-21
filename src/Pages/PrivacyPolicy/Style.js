import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import PrivacyPolicyHeroImage from "../../Assets/PrivacyPolicyHeroImage.png";
import palette from "../../Shared/palette";

export const HeroContainer = styled(Box)({
  backgroundImage: `url(${PrivacyPolicyHeroImage})`,
  backgroundPosition: "top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "300px",
  display: "flex",
  alignItems: "center",
});

export const Title = styled(Typography)({
  margin: "40px 0 10px",
  color: palette.primary,
  fontWeight: "bold",
  fontSize: "28px",

  "@media screen and (max-width: 900px)": {
    fontSize: "24px",
    margin: "30px 0 10px",
  },

  "@media screen and (max-width: 600px)": {
    fontSize: "18px",
    margin: "20px 0 10px",
  },
});

export const Desc = styled(Typography)({
  color: palette.blackText,
  opacity: 0.8,
  fontSize: "18px",
  marginBottom: "10px",

  "@media screen and (max-width: 900px)": {
    fontSize: "16px",
  },

  "@media screen and (max-width: 600px)": {
    fontSize: "14px",
  },
});

export const Bullet = styled(Box)({
  minWidth: "8px",
  height: "8px",
  marginTop: "10px",
  borderRadius: "100%",
  backgroundColor: palette.blackText,
  opacity: 0.8,

  "@media screen and (max-width: 900px)": {
    marginTop: "8px",
  },

  "@media screen and (max-width: 600px)": {
    marginTop: "6px",
  },
});
