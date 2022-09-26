import React from "react";
import { PageLayout, HistoryTable } from "../../../Components";
import { AssistantSideBarRoutes } from "../../../Shared/routes";
import { Grid } from "@mui/material";

const AssistantPatientList = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
    >
      <HistoryTable title="Liste des patients" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          Card Component Here
        </Grid>
        <Grid item xs={12} md={4}>
          Card Component Here
        </Grid>
        <Grid item xs={12} md={4}>
          Card Component Here
        </Grid>
        <Grid item xs={12} md={4}>
          Card Component Here
        </Grid>
        <Grid item xs={12} md={4}>
          Card Component Here
        </Grid>
        <Grid item xs={12} md={4}>
          Card Component Here
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default AssistantPatientList;
