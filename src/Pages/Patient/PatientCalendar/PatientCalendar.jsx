import React, { useState } from "react";
import { PageLayout } from "../../../Components";
import { Stack, Typography, Grid, IconButton } from "@mui/material";
import {
  MyInputContainer,
  SearchButton,
  MyInput,
  MyCalendarPicker,
  ScheduleContainer,
  ScheduleHeader,
  MyScheduleItem,
} from "./Style";
import User from "../../../Assets/User.png";
import { PatientSideBarRoutes } from "../../../Shared/routes";
import { AiOutlineSearch } from "react-icons/ai";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import palette from "../../../Shared/palette";
import moment from "moment";

const PatientCalendar = () => {
  const [date, setDate] = useState(moment());
  const [active, setActive] = useState();

  const scheduleArray = [
    {
      content: "09:00 AM",
      reserved: true,
    },
    {
      content: "10:00 AM",
      reserved: false,
    },
    {
      content: "11:00 AM",
      reserved: true,
    },
    {
      content: "13:00 AM",
      reserved: true,
    },
    {
      content: "14:00 AM",
      reserved: false,
    },
    {
      content: "15:00 AM",
      reserved: false,
    },
    {
      content: "16:00 AM",
      reserved: false,
    },
    {
      content: "17:00 AM",
      reserved: false,
    },
    {
      content: "18:00 AM",
      reserved: true,
    },
  ];

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
          <ScheduleContainer>
            <Typography
              component="h3"
              variant="h3"
              sx={{
                color: palette.blackText,
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Choice Your Schedule
            </Typography>
            <ScheduleHeader
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <IconButton>
                <BiChevronLeft />
              </IconButton>
              <Typography component="h4" variant="h4">
                Tuesday-25
              </Typography>
              <IconButton>
                <BiChevronRight />
              </IconButton>
            </ScheduleHeader>
            <Grid container spacing={3}>
              {scheduleArray?.map((item, index) => (
                <Grid key={index} item xs={4}>
                  <MyScheduleItem
                    className={
                      item.reserved
                        ? "reserved"
                        : active === index
                        ? "active"
                        : ""
                    }
                    onClick={() => setActive(index)}
                  >
                    {item.content}
                  </MyScheduleItem>
                </Grid>
              ))}
            </Grid>
          </ScheduleContainer>
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
