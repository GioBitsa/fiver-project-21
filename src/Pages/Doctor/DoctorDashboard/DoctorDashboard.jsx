import React, { useState } from "react";
import {
  Divider,
  Grid,
  Typography,
  Stack,
  IconButton,
  Box,
  Tab,
} from "@mui/material";
import { NewMessages, PageLayout } from "../../../Components";
import { DoctorSideBarRoutes } from "../../../Shared/routes";
import { DatesSchedule, MyCalendar } from "../../../Components/Common";
import {
  Item,
  ProfileDetailsContainer,
  StackItem,
  ChartImage,
  MyTabsContainer,
} from "./Style";
import UserDoctor from "../../../Assets/UserDoctor.png";
import Badge from "../../../Assets/Badge.svg";
import Activities1 from "../../../Assets/Icons/Activities (1).png";
import Activities2 from "../../../Assets/Icons/Activities (2).png";
import Activities3 from "../../../Assets/Icons/Activities (3).png";
import DoctorDashboardChart from "../../../Assets/DoctorDashboardChart.png";
import { GoCalendar } from "react-icons/go";
import { BiCalendar, BiBadgeCheck } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";
import palette from "../../../Shared/palette";

const datesArray = [
  {
    time: "09:00",
    text: "Mr Guillaume Gora",
  },
  {
    time: "10:00",
    text: "Mr Guillaume Gora",
  },
  {
    time: "11:00",
    text: "No consultation",
  },
  {
    time: "12:00",
    text: "Mr Guillaume Gora",
  },
  {
    time: "13:00",
    text: "Mr Guillaume Gora",
  },
  {
    time: "14:00",
    text: "Mr Guillaume Gora",
  },
  {
    time: "15:00",
    text: "No consultation",
  },
  {
    time: "16:00",
    text: "No consultation",
  },
  {
    time: "17:00",
    text: "Mr Guillaume Gora",
  },
];

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const TabPanel = (props) => {
  const { children, value, index } = props;

  return value === index && <>{children}</>;
};

const DoctorDashboard = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <PageLayout
      profile={null}
      sideBarItems={DoctorSideBarRoutes}
      profileType="doctor"
    >
      <Grid container spacing={3}>
        <Grid container spacing={3} item xs={12} md={7} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <ProfileDetailsContainer>
              <img src={UserDoctor} alt="user" />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Typography component="h4" variant="h4">
                  Karine Copper
                </Typography>
                <img className="badge" src={Badge} alt="verfied" />
              </Stack>
              <Typography component="h5" variant="h5">
                Medical Assistant
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ flexWrap: "wrap" }}
              >
                <StackItem>
                  <img src={Activities1} alt="activitie" />
                  <p>Note globale</p>
                  <span>4.7</span>
                </StackItem>
                <StackItem>
                  <img src={Activities2} alt="activitie" />
                  <p>Nombre de visite</p>
                  <span>438</span>
                </StackItem>
                <StackItem>
                  <img src={Activities3} alt="activitie" />
                  <p>Messages</p>
                  <span>233</span>
                </StackItem>
              </Stack>
            </ProfileDetailsContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "350px",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
              >
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    color: palette.blackText,
                    opacity: 0.8,
                    fontSize: "12px",
                  }}
                >
                  Demandes hebdomadaire
                </Typography>
                <IconButton disableRipple>
                  <GoCalendar
                    color={palette.blackText}
                    style={{ opacity: 0.6 }}
                  />
                </IconButton>
              </Stack>
              <ChartImage src={DoctorDashboardChart} alt="chart" />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
                sx={{ my: 1 }}
              >
                <Box>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{
                      color: palette.blackText,
                      fontSize: "16px",
                      fontWeight: "500",
                      opacity: 0.8,
                      mb: 1,
                    }}
                  >
                    Revenus générés
                  </Typography>
                  <Typography
                    component="h6"
                    variant="h6"
                    sx={{
                      color: palette.primary,
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    € 1.2 k
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    component="p"
                    variant="p"
                    sx={{
                      color: palette.blackText,
                      fontSize: "10px",
                      fontWeight: "500",
                      opacity: 0.7,
                      textAlign: "right",
                      mb: 2,
                    }}
                  >
                    Nov 1-7, 2021
                  </Typography>
                  <Typography
                    component="h6"
                    variant="h6"
                    sx={{
                      color: palette.primary,
                      fontSize: "10px",
                      fontWeight: "500",
                      textAlign: "right",
                    }}
                  >
                    + 12.7%
                  </Typography>
                </Box>
              </Stack>
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: palette.blackText,
                  fontSize: "10px",
                  fontWeight: "400",
                  opacity: 0.4,
                  textAlign: "right",
                }}
              >
                Comparatif semaine précédente
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={12} sx={{ height: "100%" }}>
            <MyTabsContainer
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                icon={<BiBadgeCheck />}
                label="Mes disponibilités"
                {...a11yProps(0)}
              />
              <Tab
                icon={<BiCalendar />}
                label="Mes Rendez-vous"
                {...a11yProps(1)}
              />
              <Tab
                icon={<BsHeadset />}
                label="Consultez maintenant"
                {...a11yProps(2)}
              />
            </MyTabsContainer>
            <TabPanel value={value} index={0}>
              <NewMessages />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item>
            <MyCalendar sx={{ border: "none", padding: 0, margin: "0 auto" }} />
            <Typography component="h3" variant="h3">
              Visites du jour :
            </Typography>
            <Divider sx={{ my: 2, display: { xs: "block", md: "none" } }} />
            <DatesSchedule datesArray={datesArray} />
          </Item>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default DoctorDashboard;
