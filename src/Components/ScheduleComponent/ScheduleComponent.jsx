import React, { useState } from "react";
import { Typography, IconButton, Grid } from "@mui/material";
import { ScheduleContainer, MyScheduleItem, ScheduleHeader } from "./Style";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import palette from "../../Shared/palette";

const ScheduleComponent = () => {
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
                item.reserved ? "reserved" : active === index ? "active" : ""
              }
              onClick={() => setActive(index)}
            >
              {item.content}
            </MyScheduleItem>
          </Grid>
        ))}
      </Grid>
    </ScheduleContainer>
  );
};

export default ScheduleComponent;
