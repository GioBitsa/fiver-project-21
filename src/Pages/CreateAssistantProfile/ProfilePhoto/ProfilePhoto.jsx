import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import palette from "../../../Shared/palette";

const ProfilePhoto = () => {
  return (
    <Stack alignItems="center">
      <Typography
        component="h4"
        variant="h6"
        sx={{
          fontSize: "18px",
          textAlign: "center",
          color: palette.blackText,
        }}
      >
        Télécharger votre photo de profil ou choisir un avatar
      </Typography>
      <IconButton
        aria-label="upload"
        component="label"
        disableRipple
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 3,
        }}
      >
        <input hidden accept="image/*" type="file" />
        <Box
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#A4C4FE",
            color: palette.whiteText,
            fontSize: "28px",
          }}
        >
          A
        </Box>
        <Typography
          component="h4"
          variant="h6"
          sx={{
            fontSize: "18px",
            textAlign: "center",
            color: palette.blackText,
            textDecoration: "underline",
            mt: 1,
          }}
        >
          Télécharger votre photo
        </Typography>
      </IconButton>
    </Stack>
  );
};

export default ProfilePhoto;
