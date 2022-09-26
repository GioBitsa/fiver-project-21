import React from "react";
import { Grid } from "@mui/material";
import {
  NewestDocuments,
  PageLayout,
  ProfileDetails,
  NewMessages,
  PatientDashboardTable,
} from "../../../Components";
import { AssistantSideBarRoutes } from "../../../Shared/routes";

const AssistantDashboard = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
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

export default AssistantDashboard;
