import React from "react";
import { Box, Stack } from "@mui/material";
import { MainInput } from "../../../Components/Common";

const PersonalInformation = () => {
  return (
    <Box>
      <Stack
        direction={{ xs: "columne", md: "row" }}
        sx={{ mb: { xs: 3, md: 0 } }}
        spacing={3}
      >
        <MainInput inputLabel="Nom" placeholder="Enter your last name" />
        <MainInput inputLabel="Prénom" placeholder="Enter your first name" />
      </Stack>
      <Stack
        direction={{ xs: "columne", md: "row" }}
        sx={{ mb: { xs: 3, md: 0 } }}
        spacing={3}
      >
        <MainInput inputLabel="Adresse" placeholder="Type your address" />
        <MainInput
          inputLabel="Numéro de téléphone :"
          placeholder="Type your number"
        />
      </Stack>
      <Stack
        direction={{ xs: "columne", md: "row" }}
        sx={{ mb: { xs: 3, md: 0 } }}
        spacing={3}
      >
        <MainInput inputLabel="Ville" placeholder="Type your address" />
        <MainInput inputLabel="Pays" placeholder="Type your number" />
      </Stack>
    </Box>
  );
};

export default PersonalInformation;
