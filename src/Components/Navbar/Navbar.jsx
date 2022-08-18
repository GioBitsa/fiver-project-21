import React from "react";
import { Box, Container, Stack, IconButton } from "@mui/material";
import Logo from "../../Assets/Logo.png";
import { BiChevronDown } from "react-icons/bi";
import { MyButton } from "./Style";
import { MainButton } from "../Common";
import palette from "../../Shared/palette";

const Navbar = () => {
  return (
    <Box sx={{ backgroundColor: palette.navbarBackground }}>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Stack direction="row" spacing={1}>
            <IconButton disableRipple>
              <img src={Logo} alt="logo" />
            </IconButton>
            <MyButton size="small" disableRipple>
              Nos produits
            </MyButton>
            <MyButton size="small" disableRipple>
              Nos tarifs
            </MyButton>
            <MyButton size="small" disableRipple>
              Nos formations
            </MyButton>
            <MyButton size="small" disableRipple>
              Nous contacter
            </MyButton>
            <MyButton size="small" disableRipple endIcon={<BiChevronDown />}>
              Nos différentes solutions
            </MyButton>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <MyButton size="small" disableRipple>
              Nos formations
            </MyButton>
            <MainButton text="Créer un compte" />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
