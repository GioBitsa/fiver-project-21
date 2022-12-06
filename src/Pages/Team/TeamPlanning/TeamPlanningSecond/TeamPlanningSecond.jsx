import React from "react";
import { PageLayout, PlanningTable } from "../../../../Components";
import { MainButton } from "../../../../Components/Common";
import { TeamSideBarRoutes } from "../../../../Shared/routes";
import { Typography, Stack, Grid, Divider } from "@mui/material";
import palette from "../../../../Shared/palette";
import {
  EditedMainSelect,
  EditedMainDatePicker,
  TeamMemberCard,
} from "../Style";
import { useNavigate } from "react-router-dom";
import HelperIcon from "../../../../Assets/Icons/HelperIcon.png";
import TeamMember1 from "../../../../Assets/TeamMember (1).png";
import TeamMember2 from "../../../../Assets/TeamMember (2).png";
import TeamMember3 from "../../../../Assets/TeamMember (3).png";
import TeamMember4 from "../../../../Assets/TeamMember (4).png";

const teamMemberArray = [
  {
    src: TeamMember1,
    name: "Mr Pasem A.",
    profession: "Infirmier",
    disabled: false,
  },
  {
    src: TeamMember2,
    name: "Mr Pasem A.",
    profession: "Infirmier",
    disabled: true,
  },
  {
    src: TeamMember3,
    name: "Mr Pasem A.",
    profession: "Infirmier",
    disabled: true,
  },
  {
    src: TeamMember4,
    name: "Mr Pasem A.",
    profession: "Infirmier",
    disabled: true,
  },
];

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
        <EditedMainSelect placeholder="Semaine du :" />
        <EditedMainDatePicker />
      </Stack>
      <Grid container spacing={3} sx={{ mb: "30px" }}>
        {teamMemberArray?.map((item, index) => (
          <Grid key={index} item xs={12} md={3}>
            <TeamMemberCard spacing={2} alignItems="center">
              <img src={item.src} alt="team member" />
              <Typography component="h4">{item.name}</Typography>
              <Typography component="p">{item.profession}</Typography>
              <Divider flexItem />
              <MainButton
                text="Visualiser planning"
                sx={{
                  width: "100%",
                  fontSize: "12px",
                  py: "10px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
                disabled={item.disabled}
              />
            </TeamMemberCard>
          </Grid>
        ))}
      </Grid>
      <PlanningTable />
    </PageLayout>
  );
};

export default TeamPlanningSecond;
