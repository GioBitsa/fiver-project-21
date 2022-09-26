import React, { useState } from "react";
import { PageLayout, ScheduleComponent } from "../../../Components";
import { Stack, Typography, Grid } from "@mui/material";
import {
  MyInputContainer,
  SearchButton,
  MyInput,
  MyCalendarPicker,
} from "./Style";
import User from "../../../Assets/User.png";
import { PatientSideBarRoutes } from "../../../Shared/routes";
import { AiOutlineSearch } from "react-icons/ai";
import palette from "../../../Shared/palette";
import moment from "moment";

const PatientCalendar = () => {
  const [date, setDate] = useState(moment());

  return (
    <PageLayout
      profile={{ img: User, name: "Lydia Meli", desc: "Bienvenue" }}
      sideBarItems={PatientSideBarRoutes}
      profileType="patient"
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: palette.primary,
          fontSize: { xs: "18px", md: "24px" },
          fontWeight: "500",
          my: 2,
        }}
      >
        Consultation programmée
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <MyCalendarPicker
            date={date}
            onChange={(newDate) => {
              setDate(newDate);
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ScheduleComponent />
        </Grid>
      </Grid>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 1, md: 3 }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontSize: { xs: "18px", md: "24px" },
            fontWeight: "500",
            my: 2,
          }}
        >
          Request for unscheduled consultations
        </Typography>
        <MyInputContainer>
          <SearchButton>
            <AiOutlineSearch />
          </SearchButton>
          <MyInput type="text" placeholder="Search" />
        </MyInputContainer>
      </Stack>
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={4}>
          Card Component here
        </Grid>
        <Grid item xs={12} md={4}>
          Card Component here
        </Grid>
        <Grid item xs={12} md={4}>
          Card Component here
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default PatientCalendar;
