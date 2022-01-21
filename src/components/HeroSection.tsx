import React from "react";
import { Typography, Box, Grid, Container, Avatar } from "@mui/material";
import Image from "/assets/totok1.svg";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  children?: React.ReactNode;
};

export default function HeroSection({
  title,
  subtitle,
  image,
  children,
}: Props): JSX.Element {
  return (
    <Box sx={{ backgroundColor: "#C2E8DC" }}>
      <Container maxWidth="md">
        <Grid container alignItems="center" sx={{ py: 12 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h1">{title}</Typography>
            <Typography variant="body1">{subtitle}</Typography>
            {children}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
            <img src={image} style={{ height: "100%", width: "100%", marginTop:22}} />
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
