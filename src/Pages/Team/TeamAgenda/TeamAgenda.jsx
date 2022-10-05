import React from "react";
import { PageLayout } from "../../../Components";
import { TeamSideBarRoutes } from "../../../Shared/routes";
import { Stack, Typography, TextField, Box, Grid } from "@mui/material";
import { MainButton } from "../../../Components/Common";
import {
  MyDesktopDatePicker,
  ProgramContainer,
  InteractionsContainer,
} from "./Style";
import palette from "../../../Shared/palette";
import UserPlus from "../../../Assets/UserPlus.png";
import moment from "moment";
import Address from "../../../Assets/Icons/Address.png";
import BinIcon from "../../../Assets/Icons/BinIcon.png";
import UnplanIcon from "../../../Assets/Icons/UnplanIcon.png";
import ExploreIcon from "../../../Assets/Icons/ExploreIcon.png";
import HoldIcon from "../../../Assets/Icons/HoldIcon.png";

const interactionsArray = [
  {
    src: BinIcon,
    text: "Delete:3",
    color: "#D76A6A",
    backgroundColor: "#FFF2F2",
  },
  {
    src: UnplanIcon,
    text: "Unplan:3",
    color: "#D76A6A",
    backgroundColor: "#FFF2F2",
  },
  {
    src: ExploreIcon,
    text: "Explore:3",
    color: "#14B8A6",
    backgroundColor: "#DEF8F5",
  },
  {
    src: HoldIcon,
    text: "Hold",
    color: "#D8D800",
    backgroundColor: "#F6F6E0",
  },
];

const TeamAgenda = () => {
  const [value, setValue] = React.useState(moment("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

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
        sx={{ mb: 2 }}
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
      <MyDesktopDatePicker
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
      <ProgramContainer direction="row" spacing={3} alignItems="center">
        <img src={Address} alt="address" />
        <Box>
          <Typography component="h3" variant="h3">
            Nombre de visite programmée
          </Typography>
          <Typography component="p" variant="p">
            11
          </Typography>
        </Box>
      </ProgramContainer>
      <Grid container spacing={2}>
        {interactionsArray?.map((item, index) => (
          <Grid key={index} item xs={6} md={3}>
            <InteractionsContainer
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                backgroundColor: item.backgroundColor,
                color: item.color,
              }}
            >
              <img src={item.src} alt={item.text} />
              <Typography component="h3" variant="h3">
                {item.text}
              </Typography>
            </InteractionsContainer>
          </Grid>
        ))}
      </Grid>
      table here
    </PageLayout>
  );
};

export default TeamAgenda;
