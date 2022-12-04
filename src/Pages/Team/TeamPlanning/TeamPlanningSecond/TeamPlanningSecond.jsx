import React from "react";
import { PageLayout, PlanningTable } from "../../../../Components";
import { MainButton } from "../../../../Components/Common";
import { TeamSideBarRoutes } from "../../../../Shared/routes";
import { Typography, Stack, Grid } from "@mui/material";
import palette from "../../../../Shared/palette";
import { EditedMainSelect, EditedMainDatePicker } from "../Style";
import { useNavigate } from "react-router-dom";
import HelperIcon from "../../../../Assets/Icons/HelperIcon.png";

const TeamPlanningSecond = () => {
  const navigate = useNavigate();

  return (
    <PageLayout
      profile={null}
      sideBarItems={TeamSideBarRoutes}
      profileType="team"
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
        spacing={3}
        sx={{ mb: 2 }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontSize: { xs: "18px", sm: "21px", md: "24px" },
            fontWeight: "600",
          }}
        >
          Proposition planning de tournée :
        </Typography>
        <MainButton
          startIcon={<img src={HelperIcon} alt="help" />}
          text="ajouter un service"
          onClick={() => navigate("/team/planning/valider3")}
        />
      </Stack>
      <Stack direction="row" alignItems="center">
        <EditedMainSelect placeholder="Organisation des tournees semaine du" />
        <EditedMainDatePicker />
      </Stack>
      <Grid container spacing={3} sx={{ mb: "30px" }}>
        <Grid item xs={12} md={3}>
          team member profile card
        </Grid>
        <Grid item xs={12} md={3}>
          team member profile card
        </Grid>
        <Grid item xs={12} md={3}>
          team member profile card
        </Grid>
        <Grid item xs={12} md={3}>
          team member profile card
        </Grid>
      </Grid>
      <PlanningTable />
    </PageLayout>
  );
};

export default TeamPlanningSecond;
