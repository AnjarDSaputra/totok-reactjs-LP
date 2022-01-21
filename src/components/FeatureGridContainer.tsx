import React from "react";
import { Container } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function FeatureGridContainer({ children }: Props): JSX.Element {
  return (
    <Container maxWidth="md" sx={{ pb: { xs: 8, md: 20 } }}>
      {children}
    </Container>
  );
}
