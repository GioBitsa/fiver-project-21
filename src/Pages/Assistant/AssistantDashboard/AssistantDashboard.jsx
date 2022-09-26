import React from "react";
import { Grid } from "@mui/material";
import {
  NewestDocuments,
  PageLayout,
  AssistantProfileDetails,
  NewMessages,
  PatientDashboardTable,
} from "../../../Components";
import User2 from "../../../Assets/User (2).png";
import { AssistantSideBarRoutes } from "../../../Shared/routes";

const AssistantDashboard = () => {
  return (
    <PageLayout
      profile={{ img: User2, name: "Anna L D", desc: "Bienvenue" }}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
    >
      <AssistantProfileDetails />
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
