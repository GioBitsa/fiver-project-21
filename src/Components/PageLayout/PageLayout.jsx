import React, { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  CssBaseline,
  Drawer,
  Stack,
  Badge,
  Typography,
} from "@mui/material";
import { MyAppBar, Main } from "./Style";
import SideBar from "./components/SideBar";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineBell } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";
import { RiFolderUploadLine } from "react-icons/ri";
import palette from "../../Shared/palette";
import EnglishLanguage from "../../Assets/EnglishLanguage.png";
import User from "../../Assets/User.png";

const drawerWidth = 300;

const PageLayout = ({ children, profile, sideBarItems, profileType }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MyAppBar
        position="fixed"
        open={open}
        drawerwidth={drawerWidth}
        sx={{
          width: {
            xs: "100%",
            lg: open ? `calc(100% - ${drawerWidth}px)` : "100%",
          },
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Box>
              <IconButton
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, color: palette.whiteText }}
                disableRipple
              >
                <AiOutlineMenu />
              </IconButton>
              <IconButton
                edge="start"
                sx={{ mr: 2, color: palette.whiteText }}
                disableRipple
              >
                <AiOutlineSearch />
              </IconButton>
            </Box>
            <Stack direction="row" alignItems="center">
              <IconButton
                edge="start"
                sx={{ ml: 2, display: { xs: "none", sm: "block" } }}
                disableRipple
              >
                <img src={EnglishLanguage} alt="en" />
              </IconButton>
              <IconButton
                edge="start"
                sx={{ ml: 2, color: palette.whiteText }}
                disableRipple
              >
                <Badge
                  badgeContent={4}
                  sx={{
                    "& span": {
                      backgroundColor: "#F86919",
                      border: `1px solid ${palette.whiteText}`,
                    },
                  }}
                >
                  <AiOutlineBell />
                </Badge>
              </IconButton>
              {profileType === "patient" ? (
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
                    ml: 4,
                    pl: 2,
                    height: "40px",
                    cursor: "pointer",
                  }}
                >
                  <RiFolderUploadLine />
                  <Typography
                    component="h2"
                    variant="h2"
                    sx={{
                      color: palette.whiteText,
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    Bulk Import Data
                  </Typography>
                  <BiChevronDown />
                </Stack>
              ) : (
                <IconButton
                  sx={{ ml: 4, display: { xs: "none", sm: "block" } }}
                  disableRipple
                >
                  <Badge
                    variant="dot"
                    size="large"
                    sx={{
                      "& span": {
                        backgroundColor: "#00BB00",
                        border: `1px solid ${palette.whiteText}`,
                        width: "10px",
                        height: "10px",
                        right: "5px",
                        bottom: "5px",
                      },
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <img src={User} alt="user" />
                  </Badge>
                  <Box>
                    <Typography
                      component="h2"
                      variant="h2"
                      sx={{
                        color: palette.whiteText,
                        fontWeight: 400,
                        fontSize: "14px",
                        ml: 1,
                      }}
                    >
                      Anna L Copper
                    </Typography>
                    {profileType === "assistant" && (
                      <Typography
                        component="p"
                        variant="p"
                        sx={{
                          color: palette.whiteText,
                          fontWeight: 300,
                          fontSize: "13px",
                          ml: 1,
                          mt: "5px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          "& svg": {
                            mr: 1,
                          },
                        }}
                      >
                        <GoLocation />
                        France
                      </Typography>
                    )}
                  </Box>
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Toolbar>
      </MyAppBar>
      <Box
        component="nav"
        sx={{
          width: { lg: open ? drawerWidth : 0 },
          transition: "all 0.3s",
          flexShrink: { lg: 0 },
        }}
      >
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: palette.whiteText,
              boxShadow: "0 30px 100px rgba(0, 0, 0, 0.08)",
              border: "none",
            },
          }}
        >
          <SideBar profile={profile} sideBarItems={sideBarItems} />
        </Drawer>
        <Drawer
          variant="persistent"
          sx={{
            display: { xs: "none", lg: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: palette.whiteText,
              boxShadow: "0 30px 100px rgba(0, 0, 0, 0.08)",
              border: "none",
            },
          }}
          open={open}
        >
          <SideBar profile={profile} sideBarItems={sideBarItems} />
        </Drawer>
      </Box>
      <Main
        sx={{
          p: { xs: 2, sm: 3 },
          width: { lg: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Main>
    </Box>
  );
};

export default PageLayout;
