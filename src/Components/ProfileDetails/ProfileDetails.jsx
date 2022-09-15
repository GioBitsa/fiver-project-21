import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import { ProfileDetailsContainer, MedicineDetails } from "./Style";
import palette from "../../Shared/palette";
import UserPatient from "../../Assets/UserPatient.png";
import Badge from "../../Assets/Badge.svg";

const ProfileDetails = () => {
  return (
    <Box
      sx={{
        backgroundColor: { xs: palette.navbarBackground, md: "initial" },
        borderRadius: "5px",
        my: 4,
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: palette.primary,
          fontSize: "24px",
          fontWeight: "500",
          display: { xs: "none", md: "block" },
          my: 2,
        }}
      >
        Profils
      </Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
        <ProfileDetailsContainer
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 3, md: 5 }}
        >
          <Box>
            <img src={UserPatient} alt="user" />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={1}
            >
              <Typography
                component="h4"
                variant="h4"
                sx={{
                  color: palette.blackText,
                  fontSize: "18px",
                  fontWeight: 500,
                  my: 1,
                }}
              >
                Lydia Meli
              </Typography>
              <img className="badge" src={Badge} alt="verfied" />
            </Stack>
            <Typography
              component="h5"
              variant="h5"
              sx={{
                textAlign: "center",
                color: palette.blackText,
                fontSize: "14px",
                fontWeight: 400,
                opacity: 0.8,
              }}
            >
              Lydia-Meli@gmail.com
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
            }}
          />
          <Divider
            orientation="horizontal"
            flexItem
            sx={{
              display: { xs: "block", md: "none" },
            }}
          />
          <Typography
            component="h5"
            variant="h5"
            sx={{
              color: palette.blackText,
              display: { xs: "block", md: "none" },
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            Informations personnelles
          </Typography>
          <Stack justifyContent="space-between">
            <Typography component="p" variant="p">
              Date de naissance : <span> 01 January 1997</span>
            </Typography>
            <Typography component="p" variant="p">
              Adresse : <span> Victory House, Street-01, France</span>
            </Typography>
            <Typography component="p" variant="p">
              Numéro de téléphone : <span> +336 12 34 56 78</span>
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ display: "inline-block", mr: 2 }}
            >
              Age : <span> 27 ans</span>
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ display: "inline-block" }}
            >
              Poids habituel : <span> 68 kg</span>
            </Typography>
          </Stack>
        </ProfileDetailsContainer>
        <Divider
          orientation="horizontal"
          flexItem
          sx={{
            display: { xs: "block", md: "none" },
            mx: "30px !important",
          }}
        />
        <MedicineDetails justifyContent="space-between">
          <Typography
            component="h5"
            variant="h5"
            sx={{
              color: palette.blackText,
              display: { xs: "block", md: "none" },
              fontSize: "16px",
              fontWeight: 500,
              mb: 3,
            }}
          >
            Informations médicales :
          </Typography>
          <Typography component="p" variant="p">
            Groupe sanguin : <span> A+ (Positive)</span>
          </Typography>
          <Typography component="p" variant="p">
            Allergies : <span> Milk, Painapple, Meat, </span>
          </Typography>
          <Typography component="p" variant="p">
            Pathologie chronique : <span> Aucune</span>
          </Typography>
          <Typography component="p" variant="p">
            Dernière consultation : <span> 10 aout, 2022 </span>
          </Typography>
          <Typography component="p" variant="p">
            Médecin traitant : <span> Dr. Anna L Doyis</span>
          </Typography>
        </MedicineDetails>
      </Stack>
    </Box>
  );
};

export default ProfileDetails;
