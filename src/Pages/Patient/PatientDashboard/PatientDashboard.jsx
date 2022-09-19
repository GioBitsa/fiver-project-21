import React from "react";
import { Grid } from "@mui/material";
import {
  NewestDocuments,
  PageLayout,
  ProfileDetails,
  NewMessages,
  PatientDashboardTable,
} from "../../../Components";
import User from "../../../Assets/User.png";
import { PatientSideBarRoutes } from "../../../Shared/routes";

const PatientDashboard = () => {
  return (
    <PageLayout
      profile={{ img: User, name: "Lydia Meli", desc: "Bienvenue" }}
      sideBarItems={PatientSideBarRoutes}
      profileType="patient"
    >
      <ProfileDetails />
      <PatientDashboardTable />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <NewMessages />
        </Grid>
        <Grid item xs={12} md={6}>
          <NewestDocuments />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default PatientDashboard;
