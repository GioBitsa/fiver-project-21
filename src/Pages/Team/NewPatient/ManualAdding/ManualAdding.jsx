import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Item } from "../Style";
import {
  MainButton,
  MainDatePicker,
  MainInput,
  MainSelect,
  MyCheckBox,
} from "../../../../Components/Common";
import palette from "../../../../Shared/palette";

const ManualAdding = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="flex-start"
      spacing={3}
    >
      <Item>
        <Typography component="h5">Saisie Manuelle :</Typography>
        <Typography component="h6">Nom Prénom</Typography>
        <MainInput placeholder="Enter your first name" />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box sx={{ flex: 1 }}>
            <Typography component="h6">Date de naissance</Typography>
            <MainDatePicker />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography component="h6">Date prescription</Typography>
            <MainDatePicker />
          </Box>
        </Stack>
        <Typography component="h6">Durée des soins</Typography>
        <MainSelect placeholder="Select your durée des soins" />
        <Typography component="h6">
          Soins a domicile indiqué sur l’ordonnance
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: "30px", mt: "10px" }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <MyCheckBox onlyIcon />
            <Typography
              sx={{
                color: palette.blackText,
                opacity: 0.6,
                fontSize: "14px",
              }}
            >
              Oui
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography
              sx={{
                color: palette.blackText,
                opacity: 0.6,
                fontSize: "14px",
              }}
            >
              Non
            </Typography>
            <MyCheckBox onlyIcon />
          </Stack>
        </Stack>
        <Typography component="h6">Nom prescripteur</Typography>
        <MainInput placeholder="Enter your first name" />
        <Typography component="h6">Type de soins</Typography>
        <MainSelect placeholder="Pansement" />
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box sx={{ flex: 1 }}>
            <Typography component="h6">Durée des soins</Typography>
            <MainSelect placeholder="1 mois" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography component="h6">Fréquence</Typography>
            <MainSelect placeholder="1 tout les 2 jours" />
          </Box>
        </Stack>
        <MainButton
          text="Ajouter type(s) de soin(s)"
          sx={{ width: "100%", textTransform: "capitalize" }}
        />
      </Item>
      <Item>
        <Typography component="h5" sx={{ mb: "30px !important" }}>
          Type(s) de soin(s) :
        </Typography>
        <Typography component="h6">Type de soins</Typography>
        <MainInput placeholder="Pansement" />
        <Typography component="h6">Durée des soins</Typography>
        <MainInput placeholder="1 mois" />
        <Typography component="h6">Fréquence</Typography>
        <MainInput placeholder="1 tout les 2 jours" />
        <Typography component="h6">Date prévu de prise en charge</Typography>
        <MainDatePicker />
        <Typography component="h6">Example text</Typography>
        <MainInput placeholder="Lorem ipsum dolor" />
        <Typography component="h6">Example text</Typography>
        <MainInput placeholder="Lorem ipsum dolor" />
        <MainButton
          text="Valider Patient"
          sx={{ width: "100%", textTransform: "capitalize" }}
        />
      </Item>
    </Stack>
  );
};

export default ManualAdding;
