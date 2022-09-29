import React from "react";
import { PageLayout, Recenties, TeamMembers } from "../../../Components";
import { TeamSideBarRoutes } from "../../../Shared/routes";
import { Typography, Stack, Grid, Box } from "@mui/material";
import palette from "../../../Shared/palette";
import {
  MySearchInput,
  MainButton,
  MyCalendar,
} from "../../../Components/Common";
import ConnectIcon from "../../../Assets/Icons/ConnectIcon.png";
import { AiOutlinePlus } from "react-icons/ai";
import { PlusIconButton, Item, Admission, Medicines } from "./Style";
import WriteDocument from "../../../Assets/Icons/WriteDocument.png";
import TeamMedicine1 from "../../../Assets/Icons/TeamMedicine (1).png";
import TeamMedicine2 from "../../../Assets/Icons/TeamMedicine (2).png";

const TeamDashboard = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={TeamSideBarRoutes}
      profileType="team"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
        sx={{ display: { xs: "none", md: "flex" } }}
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
          Dashboard
        </Typography>
        <MainButton
          startIcon={<img src={ConnectIcon} alt="connect" />}
          text="Se connecter à mon équipe"
          sx={{ padding: "10px 20px" }}
        />
      </Stack>
      <Stack
        spacing={3}
        alignItems="flex-start"
        sx={{ display: { xs: "flex", md: "none" }, mb: 3 }}
      >
        <MySearchInput />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={3}
          sx={{ width: "100%" }}
        >
          <Typography
            component="p"
            variant="p"
            sx={{ color: palette.blackText, fontWeight: 600 }}
          >
            Se connecter à mon équipe
          </Typography>
          <PlusIconButton disableRipple>
            <AiOutlinePlus />
          </PlusIconButton>
        </Stack>
      </Stack>
      <Grid container spacing={3}>
        <Grid container spacing={3} item xs={12} md={7} alignItems="stretch">
          <Grid item xs={12} md={6}>
            <Item
              sx={{
                backgroundColor: palette.navbarBackground,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography component="h3" variant="h3" sx={{ mb: 2 }}>
                Equipe soignante de :
              </Typography>
              <Typography component="h3" variant="h3">
                l’EHPAD de <span style={{ color: palette.primary }}>XXXXX</span>
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} md={6}>
            <Admission>
              <img src={WriteDocument} alt="document" />
              <Typography component="h3" variant="h3">
                Demandes d’admissions
              </Typography>
              <Stack
                className="flexContainer"
                direction="row"
                alignItems="center"
              >
                <Box>All</Box>
                <Box>Unread</Box>
              </Stack>
            </Admission>
          </Grid>
          <Grid item xs={12} md={6}>
            <Medicines>
              <Typography component="h3" variant="h3">
                Médecins
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={3}
              >
                <Box>
                  <img src={TeamMedicine1} alt="medicine" />
                  <Typography component="h4" variant="h4">
                    Médecins
                  </Typography>
                  <Typography component="h6" variant="h6">
                    11
                  </Typography>
                </Box>
                <Box>
                  <img src={TeamMedicine2} alt="medicine" />
                  <Typography component="h4" variant="h4">
                    Paramédicaux
                  </Typography>
                  <Typography component="h6" variant="h6">
                    25
                  </Typography>
                </Box>
              </Stack>
            </Medicines>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Typography
                component="h3"
                variant="h3"
                sx={{ color: `${palette.primary} !important` }}
              >
                Nombre de patient dans la structure
              </Typography>
              <Stack
                direction="row"
                spacing={3}
                alignItems="center"
                justifyContent="space-between"
                sx={{ mt: 4 }}
              >
                <Typography
                  component="h6"
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    color: palette.blackText,
                    fontWeight: 600,
                  }}
                >
                  104
                </Typography>
                <PlusIconButton disableRipple>
                  <AiOutlinePlus />
                </PlusIconButton>
              </Stack>
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item>
            <MyCalendar sx={{ border: "none", padding: 0, margin: "0 auto" }} />
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "block" } }}>
          <TeamMembers />
        </Grid>
        <Grid item xs={12} md={8}>
          <Recenties />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default TeamDashboard;
