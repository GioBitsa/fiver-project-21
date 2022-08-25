import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  IconButton,
  MenuItem,
  Divider,
} from "@mui/material";
import Logo from "../../Assets/Logo.png";
import Ellipse from "../../Assets/Ellipse.png";
import { BiChevronDown } from "react-icons/bi";
import { MyButton, MyMenu, NavbarLinksContainer, BarContainer } from "./Style";
import { MainButton } from "../Common";
import palette from "../../Shared/palette";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ backgroundColor: palette.navbarBackground, position: "relative" }}
    >
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <IconButton disableRipple>
            <img src={Logo} alt="logo" />
          </IconButton>
          <NavbarLinksContainer
            direction="row"
            spacing={1}
            justifyContent="space-between"
            sx={{ flexGrow: 1 }}
            className={sideBar ? "active" : ""}
          >
            <Stack direction="row" spacing={1}>
              <MyButton size="small" disableRipple>
                Nos produits
              </MyButton>
              <MyButton
                size="small"
                disableRipple
                endIcon={<BiChevronDown />}
                onClick={handleClick}
              >
                Nos différentes solutions
              </MyButton>
              <MyMenu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  Quelle solution qui vous intéresse ?
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} disableRipple>
                  Pour les patients
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Pour les médecins
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Pour les assistant(e)s
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Pour les structures de santé
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  pour les territoires et collectivités
                </MenuItem>
              </MyMenu>
              <MyButton size="small" disableRipple>
                Nos formations
              </MyButton>
              <MyButton size="small" disableRipple>
                Nos tarifs
              </MyButton>
              <MyButton size="small" disableRipple>
                Qui sommes nous?
              </MyButton>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MyButton size="small" disableRipple>
                Connexion
              </MyButton>
              <MainButton size="small" text="Créer un compte" />
            </Stack>
          </NavbarLinksContainer>
          <BarContainer onClick={() => setSideBar(!sideBar)}>
            <FiMenu />
          </BarContainer>
        </Stack>
      </Container>
      <img src={Ellipse} alt="elipse" className="navbar-ellipse" />
    </Box>
  );
};

export default Navbar;
