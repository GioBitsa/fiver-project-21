import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../Shared/palette";

export const Frame = styled(Box)({
  margin: "100px auto 50px auto",
  width: "700px",
  height: "600px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& >div:nth-of-type(2)": {
    top: "50%",
    left: 0,
  },

  "& >div:nth-of-type(2)::after": {
    top: "50%",
    left: "100%",
    transform: "translate(75px, -50%) rotate(90deg)",
    height: "120px",
  },

  "& >div:nth-of-type(3)": {
    top: "18%",
    left: "16%",
  },

  "& >div:nth-of-type(3)::after": {
    top: "85%",
    left: "130%",
    transform: "translate(-50%, -50%) rotate(-45deg)",
    height: "80px",
  },

  "& >div:nth-of-type(4)": {
    top: "0",
    left: "50%",
  },

  "& >div:nth-of-type(4)::after": {
    top: "125%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "80px",
  },

  "& >div:nth-of-type(5)": {
    top: "18%",
    left: "84%",
  },

  "& >div:nth-of-type(5)::after": {
    top: "85%",
    left: "-35%",
    transform: "translate(-50%, -50%) rotate(45deg)",
    height: "80px",
  },

  "& >div:nth-of-type(6)": {
    top: "50%",
    left: "100%",
  },

  "& >div:nth-of-type(6)::after": {
    top: "50%",
    left: "0",
    transform: "translate(-75px, -50%) rotate(90deg)",
    height: "120px",
  },

  "@media screen and (max-width: 900px)": {
    width: "450px",
    height: "450px",

    "& >div:nth-of-type(2)::after": {
      left: "50%",
      height: "80px",
    },

    "& >div:nth-of-type(3)::after": {
      top: "80%",
      left: "120%",
      height: "60px",
    },

    "& >div:nth-of-type(4)::after": {
      height: "70px",
    },

    "& >div:nth-of-type(5)::after": {
      top: "80%",
      left: "-30%",
      height: "60px",
    },

    "& >div:nth-of-type(6)::after": {
      left: "45%",
      height: "80px",
    },
  },

  "@media screen and (max-width: 600px)": {
    width: "300px",
    height: "300px",

    "& >div:nth-of-type(2)::after": {
      left: "30%",
      height: "60px",
    },

    "& >div:nth-of-type(3)::after": {
      top: "90%",
      left: "100%",
      height: "40px",
    },

    "& >div:nth-of-type(4)::after": {
      top: "130%",
      height: "60px",
    },

    "& >div:nth-of-type(5)::after": {
      top: "90%",
      left: "-25%",
      height: "40px",
    },

    "& >div:nth-of-type(6)::after": {
      left: "65%",
      height: "60px",
    },
  },

  "@media screen and (max-width: 450px)": {
    width: "250px",
    height: "250px",

    "& >div:nth-of-type(2)::after": {
      left: "15%",
      height: "40px",
    },

    "& >div:nth-of-type(3)::after": {
      top: "80%",
      left: "90%",
      height: "25px",
    },

    "& >div:nth-of-type(4)::after": {
      top: "120%",
      height: "40px",
    },

    "& >div:nth-of-type(5)::after": {
      top: "80%",
      left: "-15%",
      height: "25px",
    },

    "& >div:nth-of-type(6)::after": {
      left: "85%",
      height: "40px",
    },
  },
});

export const MainLogoContainer = styled(Box)({
  backgroundColor: palette.primary,
  borderRadius: "100%",
  width: "300px",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: `10px solid ${palette.whiteText}`,

  "& h6": {
    color: palette.whiteText,
    textAlign: "center",
    padding: "0 10px",
  },

  "@media screen and (max-width: 900px)": {
    width: "200px",
    height: "200px",
    position: "relative",
    zIndex: 1,

    "& h6": {
      fontSize: "14px",
    },
  },

  "@media screen and (max-width: 600px)": {
    width: "130px",
    height: "130px",
    border: `3px solid ${palette.whiteText}`,

    "& h6": {
      fontSize: "12px",
    },
  },
});

export const MainImageContainer = styled(Box)({
  width: "150px",
  height: "150px",
  backgroundColor: palette.whiteText,
  borderRadius: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    width: "80px",
    height: "80px",
    objectFit: "contain",
  },

  "@media screen and (max-width: 900px)": {
    width: "100px",
    height: "100px",

    "& img": {
      width: "50px",
      height: "50px",
    },
  },

  "@media screen and (max-width: 600px)": {
    width: "50px",
    height: "50px",

    "& img": {
      width: "30px",
      height: "30px",
    },
  },
});

export const Features = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  transform: "translate(-50%, -50%)",
  cursor: "pointer",

  "& img": {
    width: "70%",
    height: "70%",
    objectFit: "contain",
  },
  "& p": {
    fontSize: "18px",
    fontWeight: 600,
    textAlign: "center",
    maxWidth: "100px",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "2px",
    height: "50px",
    backgroundColor: palette.grey,
    transform: "translateX(-50%)",
  },

  "@media screen and (max-width: 900px)": {
    "& img": {
      width: "50px",
      height: "50px",
    },
    "& p": {
      fontSize: "15px",
    },
  },

  "@media screen and (max-width: 600px)": {
    "& img": {
      width: "40px",
      height: "40px",
    },
    "& p": {
      fontSize: "12px",
    },
  },

  "@media screen and (max-width: 450px)": {
    "& img": {
      width: "30px",
      height: "30px",
    },
  },
});

export const DetailsContainer = styled(Grid)({
  boxShadow: "0 4px 4px 0 rgb(0,0,0, 0.25)",
  margin: "10px 0",
  borderRadius: "12px",
  height: "200px",

  "& > div": {
    padding: "25px",
    borderRadius: "12px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
  },

  "& > div > div": {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: "20px",
  },

  "& > div:hover, .active": {
    transform: "scale(1.1)",
    background: palette.linearHorizontaly,
  },

  "& > div > div h6": {
    fontSize: "16px",
    color: palette.black,
  },

  "& > div:hover > div h6, .active h6": {
    color: palette.white,
  },

  "& > div > div span": {
    fontSize: "24px",
    fontWeight: "600",
    position: "relative",
    marginRight: "10px",
    paddingRight: "10px",
    color: palette.primary,
  },

  "& > div:hover > div span, .active span": {
    color: palette.white,
  },

  "& > div > div span::after": {
    content: '""',
    position: "absolute",
    top: "10%",
    left: "100%",
    width: "1px",
    height: "80%",
    opacity: "0.5",
    backgroundColor: palette.grey,
  },

  "& > div:hover > div span::after, .active span::after": {
    backgroundColor: palette.white,
  },

  "& > div button": {
    transition: "none",
  },

  "& > div:hover button, .active button": {
    borderColor: palette.white,
    backgroundColor: palette.white,
  },

  "@media screen and (max-width: 1100px)": {
    "& > div": {
      padding: "20px",
    },

    "& > div > div h6": {
      fontSize: "14px",
    },
  },

  "@media screen and (max-width: 950px)": {
    "&  button": {
      padding: "8px 6px",
    },
  },

  "@media screen and (max-width: 900px)": {
    height: "100%",
    boxShadow: "none",

    "& > div": {
      minHeight: "150px",
      padding: "25px",
      margin: "10px 0",
      backgroundColor: palette.whiteText,
      border: "1px solid rgba(0,0,0,0.1)",
      alignItems: "center",
    },

    "& > div:hover, .active": {
      transform: "scale(1)",
      boxShadow: "0 4px 4px 0 rgba(0,0,0,0.25)",
      border: "none",
    },

    "& > div > div h6": {
      fontSize: "18px",
    },

    "& > div > div span": {
      fontSize: "27px",
    },

    "&  button": {
      width: "100%",
      maxWidth: "400px",
      padding: "8px 12px",
    },
  },

  "@media screen and (max-width: 500px)": {
    "& > div > div": {
      width: "100%",
      justifyContent: "flex-start",
    },

    "& > div > div h6": {
      fontSize: "16px",
    },

    "& > div > div span": {
      fontSize: "27px",
    },

    "&  button": {
      width: "100%",
      maxWidth: "400px",
      padding: "8px 12px",
    },
  },
});

export const ImageContainer = styled(Box)({
  width: "100px",
  height: "100px",
  borderRadius: "100%",
  border: `5px solid ${palette.primary}`,
  backgroundColor: palette.whiteText,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  "@media screen and (max-width: 600px)": {
    width: "50px",
    height: "50px",
    borderWidth: "2px",
  },
});
