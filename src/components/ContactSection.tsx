import React from "react";
import { Typography, Box, Grid, Container, Button, Avatar } from "@mui/material";
// import logo from '/assets/contact2.svg'; // with import
import { WhatsApp } from "@mui/icons-material";
import scrollIntoView from "scroll-into-view-if-needed"
import Filling from "./fillform";
export default function ContactSection(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Box id="formpesan" sx={{ borderRadius: 4, p: 2 }}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">Mau Mencoba?</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Hubungi Kami Sekarang Juga
            </Typography>
           <Filling/>
            
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <Container>
              
              <Box
             
              />
            </Container>
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
}

