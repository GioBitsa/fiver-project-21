import React from "react";
import { Box, Typography } from "@mui/material";
import { NewMessageItem, AddresseeDetails, MessageDetails } from "./Style";
import palette from "../../Shared/palette";
import User2 from "../../Assets/User (2).png";
import User3 from "../../Assets/User (3).png";
import User4 from "../../Assets/User (4).png";

const messageArray = [
  {
    src: User2,
    name: "Dr. Marcus Horizon",
    text: "I don,t have any fever, but headchace...",
    time: "10:24",
    count: 1,
  },
  {
    src: User3,
    name: "Dr. Shimu Edon",
    text: "I don,t have any fever, but headchace...",
    time: "10:24",
    count: 1,
  },
  {
    src: User4,
    name: "Dr. Aman Pathan",
    text: "I don,t have any fever, but headchace...",
    time: "10:24",
    count: 1,
  },
];

const NewMessages = () => {
  return (
    <Box
      sx={{
        p: { xs: "20px", md: "30px" },
        backgroundColor: palette.whiteText,
        boxShadow: "0px 4px 15px rgb(0 0 0 / 8%)",
        maxWidth: { xs: "initial", md: "600px" },
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          fontWeight: 500,
          color: palette.primary,
          lineHeight: "2.5rem",
        }}
      >
        Mes messages
      </Typography>
      {messageArray.map((item, index) => (
        <NewMessageItem
          key={index}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <AddresseeDetails direction="row" alignItems="center" spacing={2}>
            <img src={item.src} alt="user" />
            <Box>
              <h6>{item.name}</h6>
              <p>{item.text}</p>
            </Box>
          </AddresseeDetails>
          <MessageDetails alignItems="flex-end">
            <p>{item.time}</p>
            <span>{item.count}</span>
          </MessageDetails>
        </NewMessageItem>
      ))}
    </Box>
  );
};

export default NewMessages;
