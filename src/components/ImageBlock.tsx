import React from "react";
import { Avatar, Grid, Typography, Card, Container } from "@mui/material";
// import Rating from "@mui/material/Rating"
interface Props {
  title: string; 
  image: string; 
}

export default function ImageBlock({ 
  title,image }: Props): JSX.Element {
  return (
    <Grid item xs={4} sm={6} md={4}>
      <Card variant="outlined" sx={{ height: "100%", p: 1 }}>
        
            <Grid item>
               <Container>
            <img src={image} style={{ height: "100%", width: "100%", marginTop:22}} />
            </Container>
            </Grid>
            <Grid item xs>
            <Typography align="center" sx={{fontSize:13}} variant="h4">{title}</Typography>           
          </Grid>
      </Card>
    </Grid>
  );
}
