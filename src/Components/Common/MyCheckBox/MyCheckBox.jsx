import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { Item, CheckboxIcon } from "./Style";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdDone } from "react-icons/md";

const MyCheckBox = ({ title, span, onlyIcon }) => {
  const [active, setActive] = useState(false);

  return (
    <Item
      direction="row"
      justifyContent="space-between"
      className={active ? "active" : ""}
      spacing={2}
      sx={onlyIcon && { p: 0, backgroundColor: "transparent", m: 0 }}
    >
      <CheckboxIcon
        className={active ? "active" : ""}
        onClick={() => setActive(!active)}
      >
        <MdDone />
      </CheckboxIcon>
      {!onlyIcon && (
        <>
          <Box
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => setActive(!active)}
          >
            <Typography component="h3" variant="h3">
              {title}
            </Typography>
            <Typography component="p" variant="p">
              {span}
            </Typography>
          </Box>
          <IconButton disableRipple>
            <BiDotsVerticalRounded />
          </IconButton>
        </>
      )}
    </Item>
  );
};

export default MyCheckBox;
