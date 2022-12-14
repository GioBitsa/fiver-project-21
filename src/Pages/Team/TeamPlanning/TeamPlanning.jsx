import React from "react";
import { PageLayout, PlanningTable } from "../../../Components";
import { MainButton } from "../../../Components/Common";
import { TeamSideBarRoutes } from "../../../Shared/routes";
import { Typography, Stack } from "@mui/material";
import palette from "../../../Shared/palette";
import { EditedMainSelect, EditedMainDatePicker } from "./Style";
import { useNavigate } from "react-router-dom";

const TeamPlanning = () => {
  const navigate = useNavigate();

  return (
    <PageLayout
      profile={null}
      sideBarItems={TeamSideBarRoutes}
      profileType="team"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        spacing={3}
        sx={{ my: 2 }}
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
          Organiser sa tournée
        </Typography>
        <MainButton
          text="Valider"
          onClick={() => navigate("/team/planning/valider2")}
        />
      </Stack>
      <Stack direction="row" alignItems="center">
        <EditedMainSelect placeholder="Organisation des tournees semaine du" />
        <EditedMainDatePicker />
      </Stack>
      <PlanningTable />
    </PageLayout>
  );
};

export default TeamPlanning;
