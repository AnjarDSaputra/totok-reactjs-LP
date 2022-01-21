import React from "react";
import { Avatar, Grid, Typography, Card } from "@mui/material";
import Testimonial from "./interfaces/Testimonial";
import Rating from "@mui/material/Rating"
interface Props {
  testimonial: Testimonial;
}

export default function TestimonialBlock({ testimonial }: Props): JSX.Element {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card variant="outlined" sx={{ height: "100%", p: 2 }}>
        <Grid container spacing={2} alignItems="center" sx={{ mb: 1 }}>
          {testimonial.image !== undefined ? (
            <Grid item>
              <Avatar
                variant="circular"
                alt={testimonial.name}
                src={testimonial.image}
              />
            </Grid>
          ) : null}
          <Grid item xs>
            <Typography variant="h4">{testimonial.name}</Typography>
            <Rating name="read-only" value={testimonial.rating} readOnly />
          </Grid>
        </Grid>
        <Typography variant="body2">{testimonial.content}</Typography>
      </Card>
    </Grid>
  );
}
