import React from "react";
import { Box, Container, Button, Stack, IconButton } from "@mui/material";
import Logo from "../../Assets/Logo.png";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 2 }}>
        <Stack direction="row" spacing={2}>
          <IconButton disableRipple>
            <img src={Logo} alt="logo" />
          </IconButton>
          <Button disableRipple endIcon={<BiChevronDown />}>
            Options
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
