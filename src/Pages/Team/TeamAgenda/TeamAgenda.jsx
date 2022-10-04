import React from "react";
import { PageLayout } from "../../../Components";
import { TeamSideBarRoutes } from "../../../Shared/routes";
import { Stack, Typography } from "@mui/material";
import { MainButton } from "../../../Components/Common";
import palette from "../../../Shared/palette";
import UserPlus from "../../../Assets/UserPlus.png";

const TeamAgenda = () => {
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
        spacing={2}
        sx={{ my: 2 }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontSize: { xs: "18px", sm: "21px", md: "24px" },
            fontWeight: "500",
          }}
        >
          Organiser sa tournée
        </Typography>
        <MainButton
          startIcon={<img src={UserPlus} alt="plus" />}
          text="ajouter un service"
          sx={{ padding: "10px 20px" }}
        />
      </Stack>
    </PageLayout>
  );
};

export default TeamAgenda;
