import React, { useState } from "react";
import { PageLayout } from "../../../Components";
import { TeamSideBarRoutes } from "../../../Shared/routes";
import { Stack, Typography, Grid, Box } from "@mui/material";
import UserPlus from "../../../Assets/UserPlus.png";
import palette from "../../../Shared/palette";
import {
  InputWithSelectFilter,
  MainButton,
  MyCheckBox,
} from "../../../Components/Common";
import { MyButton, MyDateButton } from "./Style";

const checkBoxesArray = [
  {
    title: "Leslie Alexander",
    span: "RPPS : S8347521",
  },
  {
    title: "Leslie Alexander",
    span: "RPPS : S8347521",
  },
  {
    title: "Leslie Alexander",
    span: "RPPS : S8347521",
  },
  {
    title: "Leslie Alexander",
    span: "RPPS : S8347521",
  },
  {
    title: "Leslie Alexander",
    span: "RPPS : S8347521",
  },
  {
    title: "Leslie Alexander",
    span: "RPPS : S8347521",
  },
];

const Team = () => {
  const [active, setActive] = useState(1);
  const [date, setDate] = useState("day");

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
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontSize: { xs: "18px", sm: "21px", md: "24px" },
            fontWeight: "600",
            my: 2,
          }}
        >
          Organiser son planning
        </Typography>
        <MainButton
          startIcon={<img src={UserPlus} alt="plus" />}
          text="Se connecter à mon équipe"
          sx={{ padding: "10px 20px", display: { xs: "none", md: "flex" } }}
        />
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={3}
        sx={{ my: 2 }}
      >
        <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
          <MyButton
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
          >
            Infirmier(e)s
          </MyButton>
          <MyButton
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
          >
            Aides-soignant(e)s
          </MyButton>
        </Stack>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          spacing={2}
          sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}
        >
          <Typography
            component="h4"
            variant="h4"
            sx={{
              color: palette.blackText,
              fontSize: "16px",
              fontWeight: "bold",
              opacity: 0.8,
            }}
          >
            Infirmier List
          </Typography>
          <MainButton
            startIcon={<img src={UserPlus} alt="plus" />}
            text="Se connecter à mon équipe"
            sx={{ padding: "10px 20px" }}
          />
        </Stack>
        <InputWithSelectFilter sx={{ height: "35px" }} />
      </Stack>
      {active === 1 ? (
        <Grid container spacing={3}>
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
      ) : (
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            team member profile card 2
          </Grid>
          <Grid item xs={12} md={3}>
            team member profile card 2
          </Grid>
          <Grid item xs={12} md={3}>
            team member profile card 2
          </Grid>
          <Grid item xs={12} md={3}>
            team member profile card 2
          </Grid>
        </Grid>
      )}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={7}>
          <Typography
            component="h3"
            variant="h3"
            sx={{
              color: palette.lightPrimary,
              fontSize: "18px",
              fontWeight: "600",
              my: 2,
            }}
          >
            Sélectionner vos patients :
          </Typography>
          <Box
            className="customScrollbarContainer"
            sx={{ maxHeight: "400px", overflowY: "auto" }}
          >
            {checkBoxesArray?.map((item, index) => (
              <MyCheckBox key={index} title={item.title} span={item.span} />
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
          >
            <Typography
              component="h3"
              variant="h3"
              sx={{
                color: { xs: palette.blackText, md: palette.lightPrimary },
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: "600",
                my: 2,
              }}
            >
              Assigner une semaine :
            </Typography>
            <Stack direction="row" alignItems="center">
              <MyDateButton
                className={date === "day" ? "active" : ""}
                onClick={() => setDate("day")}
              >
                Week
              </MyDateButton>
              <MyDateButton
                className={date === "week" ? "active" : ""}
                onClick={() => setDate("week")}
              >
                Month
              </MyDateButton>
            </Stack>
          </Stack>
          {date === "day"
            ? "calendar component daily"
            : "calendar component weekly"}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Team;
