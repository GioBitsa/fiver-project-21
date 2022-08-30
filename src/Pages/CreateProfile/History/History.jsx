import React from "react";
import { Box, Grid } from "@mui/material";
import { MainInput, MainSelect } from "../../../Components/Common";

const History = () => {
  return (
    <Box>
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={6}>
          <MainSelect
            inputLabel="Groupe sanguin"
            placeholder="Select your blood group"
            value={0}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            inputLabel="Traitement(s) au long court (3mois)"
            placeholder="Facultatif"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            type="number"
            inputLabel="Pathologie chronique"
            placeholder="Sélectionner dans la liste"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            type="number"
            inputLabel="Vos langues parlées"
            placeholder="Selectionner la ou les langues que vous comprenez le mieux"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            type="number"
            inputLabel="Allergie(s) connue(s)"
            placeholder="Sélectionner dans la liste"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            inputLabel="Numéro de sécurité sociale"
            placeholder="XXXXXXXXXXXXXXXXX"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default History;
