import React from "react";
import { Typography, Stack, Grid, Box } from "@mui/material";
import { PageLayout } from "../../../Components";
import { AssistantSideBarRoutes } from "../../../Shared/routes";
import { SignItem } from "./Style";
import palette from "../../../Shared/palette";
import { InputWithSelectFilter, MainButton } from "../../../Components/Common";
import { FiChevronDown } from "react-icons/fi";
import Map from "../../../Assets/Map.png";

const AssistantChat = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: palette.primary,
          fontSize: { xs: "18px", md: "24px" },
          fontWeight: "600",
          my: 2,
        }}
      >
        Consultations non programmé
      </Typography>
      <Stack
        direction="row"
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        spacing={3}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          alignItems="center"
          sx={{
            p: { xs: 0, md: 2 },
            border: { xs: "none", md: "1px solid rgba(0, 0, 0, 0.2)" },
          }}
        >
          <SignItem
            sx={{
              color: palette.red,
              "& span": { backgroundColor: palette.red },
            }}
          >
            <span />
            red waiting time 15 min
          </SignItem>
          <SignItem
            sx={{
              color: palette.yellow,
              "& span": { backgroundColor: palette.yellow },
            }}
          >
            <span />
            red waiting time 15 min
          </SignItem>
          <SignItem
            sx={{
              color: palette.signGreen,
              "& span": { backgroundColor: palette.signGreen },
            }}
          >
            <span />
            red waiting time 15 min
          </SignItem>
        </Stack>
        <MainButton
          text="Color Filter"
          endIcon={<FiChevronDown />}
          sx={{ fontSize: "12px" }}
        />
      </Stack>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={8} sx={{ maxHeight: "600px" }}>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={Map}
            alt="map"
          />
        </Grid>
        <Grid item xs={12} md={4} sx={{ maxHeight: "600px" }}>
          <InputWithSelectFilter />
          <Typography
            sx={{
              color: palette.blackText,
              fontSize: "16px",
              fontWeight: "500",
              my: 2,
            }}
          >
            Liste des patients
          </Typography>
          <Stack
            spacing={2}
            sx={{ height: "calc(100% - 106px)", overflowY: "auto" }}
          >
            <Box>cards here</Box>
          </Stack>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default AssistantChat;
