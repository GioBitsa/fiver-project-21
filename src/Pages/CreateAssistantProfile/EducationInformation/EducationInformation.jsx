import React from "react";
import { Box, Grid } from "@mui/material";
import { MainInput } from "../../../Components/Common";

const EducationInformation = () => {
  return (
    <Box>
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={6}>
          <MainInput
            inputLabel="Numéro de certification MC :"
            placeholder="XXXXXXXX"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            inputLabel="Zone d’exercice"
            placeholder="Enter la ville/le territoire ou le département d’exercice"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            type="number"
            inputLabel="Profil initial"
            placeholder="Selectionner votre statut"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            type="number"
            inputLabel="Certification avancée"
            placeholder="Selectionner dans la liste"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput inputLabel="Experties" placeholder="Type your experties" />
        </Grid>
        <Grid item xs={12} md={6}>
          <MainInput
            type="number"
            inputLabel="Structure d’affiliation"
            placeholder="Selectionner dans la liste"
          />
        </Grid>
        <Grid item xs={12}>
          <MainInput
            inputLabel="Décrivez vous en quelques mots :"
            placeholder="Facultatif"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationInformation;
