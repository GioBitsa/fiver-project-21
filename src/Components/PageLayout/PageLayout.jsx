import React, { useState } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  CssBaseline,
  Drawer,
  Typography,
} from "@mui/material";
import { MyAppBar, Main } from "./Style";
import SideBar from "./components/SideBar";
import { AiOutlineMenu } from "react-icons/ai";
import palette from "../../Shared/palette";

const drawerWidth = 300;

const PageLayout = ({ children, profile, sideBarItems }) => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

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
            md: open ? `calc(100% - ${drawerWidth}px)` : "100%",
          },
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: palette.whiteText }}
            disableRipple
          >
            <AiOutlineMenu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </MyAppBar>
      <Box
        component="nav"
        sx={{
          width: { md: open ? drawerWidth : 0 },
          transition: "all 0.3s",
          flexShrink: { md: 0 },
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
            display: { xs: "block", md: "none" },
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
            display: { xs: "none", md: "block" },
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
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Main>
    </Box>
  );
};

export default PageLayout;
