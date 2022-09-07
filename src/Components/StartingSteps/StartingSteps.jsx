import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MyItem, MyStack } from "./Style";
import palette from "../../Shared/palette";
import { OutlineMainButton } from "../Common";

const StartingSteps = ({ title, steps }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: palette.primary,
          fontWeight: "bold",
          fontSize: { xs: "21px", sm: "34px", md: "38px", lg: "44px" },
          mb: "50px",
        }}
        align="center"
      >
        {title}
      </Typography>
      <Grid container>
        {steps?.map((item, index) => (
          <Grid key={index} item xs={12} md={4}>
            <MyItem>
              <MyStack>
                <span>{item.id}</span>
                <Box>
                  <Typography component="h6" variant="h6">
                    {item.header}
                  </Typography>
                  <Typography component="p" variant="p">
                    {item.desc}
                  </Typography>
                </Box>
              </MyStack>
              <OutlineMainButton text={item.button} />
            </MyItem>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StartingSteps;
