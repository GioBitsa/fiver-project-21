import React from "react";
import { Box, Grid } from "@mui/material";
import { MainDatePicker, MainInput } from "../../../Components/Common";

const PersonalInformation = () => {
  return (
    <Box>
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={6}>
          <MainInput inputLabel="Nom" placeholder="Dubois" />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput inputLabel="Prénom" placeholder="Justine" />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            type="number"
            inputLabel="Age"
            placeholder="Type your age"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainDatePicker inputLabel="Date de naissance" />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput inputLabel="Adresse" placeholder="Type your address" />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            inputLabel="Numéro de téléphone :"
            placeholder="Type your number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput inputLabel="Ville" placeholder="Type your address" />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput inputLabel="Pays" placeholder="Type your number" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PersonalInformation;
