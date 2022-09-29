import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Item, MyButton } from "./Style";

const Recenties = () => {
  const [active, setActive] = useState("1");

  return (
    <Item>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Typography component="h3" variant="h3">
          Transmissions récentes
        </Typography>
        <Typography component="h6" variant="h6">
          See all
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" sx={{ mb: 2 }}>
        <MyButton
          className={active === "1" ? "active" : ""}
          onClick={() => setActive("1")}
        >
          Paramedical
        </MyButton>
        <MyButton
          className={active === "2" ? "active" : ""}
          onClick={() => setActive("2")}
        >
          Médecins
        </MyButton>
      </Stack>
      {active === "1" ? <>Here is Table</> : <>Here is Second Table</>}
    </Item>
  );
};

export default Recenties;
