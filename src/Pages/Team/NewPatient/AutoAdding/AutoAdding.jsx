import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Item, QRCode, MyButton } from "../Style";
import palette from "../../../../Shared/palette";
import QRCodeIcon from "../../../../Assets/Icons/QRCode.png";
import { MainInput, MainSelect } from "../../../../Components/Common";

const AutoAdding = () => {
  const [active, setActive] = useState(1);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="flex-start"
      spacing={3}
    >
      <Item>
        <Typography
          sx={{
            color: palette.blackText,
            fontSize: "16px",
            fontWeight: 600,
            opacity: 0.8,
          }}
        >
          Saisie Assistée :
        </Typography>
        <QRCode src={QRCodeIcon} alt="qr code" />
        <Typography
          sx={{
            color: palette.blackText,
            fontSize: "14px",
            opacity: 0.6,
            textAlign: "center",
            mb: "50px",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia .
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center">
          <MyButton
            text="Scanner"
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
            sx={{
              borderRadius: "5px 0 0 5px",
              minWidth: "150px",
              textTransform: "capitalize",
            }}
          />
          <MyButton
            text="Importez"
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
            sx={{
              borderRadius: "0 5px 5px 0",
              minWidth: "150px",
              textTransform: "capitalize",
            }}
          />
        </Stack>
      </Item>
      <Item sx={{ height: "600px", overflowY: "auto" }}>
        <Typography component="h5">Validation profils/ordonnance :</Typography>
        <Typography component="h6">Nom Prénom</Typography>
        <MainInput placeholder="John Wick" />
        <Typography component="h6">Date de naissance</Typography>
        <MainInput placeholder="02/02/1986" />
        <Typography component="h6">Date de naissance</Typography>
        <MainInput placeholder="22/11/2022" />
        <Typography component="h6">Type de soins</Typography>
        <MainSelect placeholder="Pansement" />
        <Typography component="h6">Durée des soins</Typography>
        <MainSelect placeholder="1 mois" />
        <Typography component="h6">Fréquence</Typography>
        <MainSelect placeholder="1 tout les 2 jours" />
        <Typography component="h6">A domicile ?</Typography>
      </Item>
    </Stack>
  );
};

export default AutoAdding;
