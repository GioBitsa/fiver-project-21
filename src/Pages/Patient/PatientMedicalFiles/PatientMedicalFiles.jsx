import React from "react";
import { Typography, Grid, Select, MenuItem, Box, Stack } from "@mui/material";
import { PageLayout } from "../../../Components";
import User from "../../../Assets/User.png";
import { PatientSideBarRoutes } from "../../../Shared/routes";
import {
  MyItem,
  MyInputContainer,
  SearchButton,
  MyInput,
  MySelectContainer,
} from "./Style";
import palette from "../../../Shared/palette";
import { AiOutlineSearch } from "react-icons/ai";

const PatientMedicalFiles = () => {
  return (
    <PageLayout
      profile={{ img: User, name: "Lydia Meli", desc: "Bienvenue" }}
      sideBarItems={PatientSideBarRoutes}
      profileType="patient"
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: palette.primary,
          fontSize: "24px",
          fontWeight: "500",
          my: 2,
        }}
      >
        Liste des patients
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          profile card here
        </Grid>
        <Grid item xs={12} md={7}>
          <MyItem>
            <Stack direction="row" alignItems="center" spacing={3}>
              <MyInputContainer>
                <SearchButton>
                  <AiOutlineSearch />
                </SearchButton>
                <MyInput type="text" placeholder="Search test" />
                <MySelectContainer>
                  <Select defaultValue={1}>
                    <MenuItem value={1}>Filter</MenuItem>
                    <MenuItem value={2}>first option</MenuItem>
                    <MenuItem value={3}>second option</MenuItem>
                    <MenuItem value={4}>third option</MenuItem>
                  </Select>
                </MySelectContainer>
              </MyInputContainer>
              <Box>date</Box>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={3}
            >
              <Typography
                component="h4"
                variant="h4"
                sx={{
                  color: palette.primary,
                  fontSize: "20px",
                  fontWeight: "500",
                  my: 2,
                }}
              >
                All Test Reports
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: palette.blackText,
                  fontSize: "12px",
                  fontWeight: "300",
                  opacity: 0.6,
                  cursor: "pointer",
                }}
              >
                See all
              </Typography>
            </Stack>
            files list in patient features here
          </MyItem>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default PatientMedicalFiles;
