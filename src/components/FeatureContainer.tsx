import React from "react";
import { Container,Grid } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function FeatureContainer({ children }: Props): JSX.Element {
  return (
    <Container maxWidth="md" sx={{ pb: { xs: 8, md: 12 } }}>
       <Grid container spacing={2}>
      {children}
      </Grid>
    </Container>
  );
}
