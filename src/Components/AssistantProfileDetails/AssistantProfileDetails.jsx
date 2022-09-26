import React from "react";
import { Box, Stack, Typography, Divider, IconButton } from "@mui/material";
import { ProfileDetailsContainer, Item } from "./Style";
import palette from "../../Shared/palette";
import UserAssistant from "../../Assets/UserAssistant.png";
import Badge from "../../Assets/Badge.svg";
import Activities1 from "../../Assets/Icons/Activities (1).png";
import Activities2 from "../../Assets/Icons/Activities (2).png";
import Activities3 from "../../Assets/Icons/Activities (3).png";
import { GoCalendar } from "react-icons/go";

const AssistantProfileDetails = () => {
  return (
    <Box>
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
        Profils
      </Typography>
      <ProfileDetailsContainer
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, md: 5 }}
        justifyContent="space-between"
      >
        <Box>
          <img src={UserAssistant} alt="user" />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
          >
            <Typography
              component="h4"
              variant="h4"
              sx={{
                color: palette.primary,
                fontSize: "18px",
                fontWeight: 500,
                my: 1,
              }}
            >
              Karine Copper
            </Typography>
            <img className="badge" src={Badge} alt="verfied" />
          </Stack>
          <Typography
            component="h5"
            variant="h5"
            sx={{
              textAlign: "center",
              color: palette.blackText,
              fontSize: "14px",
              fontWeight: 400,
              opacity: 0.8,
            }}
          >
            Medical Assistant
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", md: "block" },
          }}
        />
        <Box>
          <Typography
            component="h4"
            variant="h4"
            sx={{
              color: palette.primary,
              fontSize: "20px",
              fontWeight: 500,
              mb: 2,
            }}
          >
            Activité
          </Typography>
          <Stack
            direction="row"
            spacing={{ xs: 1, sm: 3 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Item>
              <img src={Activities1} alt="activitie" />
              <p>Note globale</p>
              <span>4.7</span>
            </Item>
            <Item>
              <img src={Activities2} alt="activitie" />
              <p>Nombre de visite</p>
              <span>438</span>
            </Item>
            <Item>
              <img src={Activities3} alt="activitie" />
              <p>Messages</p>
              <span>233</span>
            </Item>
          </Stack>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", md: "block" },
          }}
        />
        <Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            <Typography
              component="h4"
              variant="h4"
              sx={{
                color: palette.primary,
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              Revenus générés
            </Typography>
            <IconButton disableRipple>
              <GoCalendar color={palette.blackText} style={{ opacity: 0.6 }} />
            </IconButton>
          </Stack>
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
                  fontWeight: "600",
                  opacity: 0.8,
                  mb: 1,
                }}
              >
                Total
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
                € 2.5 k
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
                Aug 1, 2022
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
                + 8.7% more
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
            Then In Previous Week
          </Typography>
        </Box>
      </ProfileDetailsContainer>
    </Box>
  );
};

export default AssistantProfileDetails;
