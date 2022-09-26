import React from "react";
import { Typography, Grid, Box, Stack } from "@mui/material";
import { PageLayout } from "../../../Components";
import { DoctorSideBarRoutes } from "../../../Shared/routes";
import { MyItem } from "./Style";
import palette from "../../../Shared/palette";
import { InputWithSelectFilter } from "../../../Components/Common";

const DoctorMedicalFiles = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={DoctorSideBarRoutes}
      profileType="doctor"
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
        Dossier médical
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          profile card here
        </Grid>
        <Grid item xs={12} md={7}>
          <MyItem>
            <Stack direction="row" alignItems="center" spacing={3}>
              <InputWithSelectFilter />
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
            files list in doctor features here
          </MyItem>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default DoctorMedicalFiles;
