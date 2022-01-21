import React from "react";
import { Typography, Box, Grid, Container, Button, Avatar } from "@mui/material";
// import logo from '/assets/contact2.svg'; // with import
import { WhatsApp } from "@mui/icons-material";
const WaText = "Hallo";
const WaPhone = "6285292609771";
const Walink = "https://wa.me/"+WaPhone+"/?text="+WaText;

export default function ContactSection(): JSX.Element {
  return (
    <Container maxWidth="md">
      <Box sx={{ backgroundColor: "#C2E8DC", borderRadius: 4, p: 2 }}>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h2">Mau Mencoba?</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Hubungi Kami Sekarang Juga
            </Typography>
            <Button variant="contained" href={Walink}>
              Whatsapp Fast Respon <WhatsApp></WhatsApp>
            </Button>
            
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container>
              {/* <Avatar  src="/assets/contact2.svg" /> */}
              <Box
                // component="img"
                // sx={{
                //   height: 500,
                //   width: 500,
                // }}
                // alt="The house from the offer."
                // src="/assets/contact2.svg"
              />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
