import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";

interface Props {
  title: string;
  content: JSX.Element;
  icon?: JSX.Element;
}

export default function FeatureBlock({
  title,
  content,
  icon,
}: Props): JSX.Element {
  return (
    <Grid item xs={22} sm={16} md={14} sx={{ mb: 2 }}>
      {icon !== undefined ? (
        <Avatar variant="rounded" sx={{ backgroundColor: "#e0e0e0", mb: 2 }}>
          {React.cloneElement(icon, { color: "primary" })}
        </Avatar>
      ) : null}
      <Typography variant="h3" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Grid >{content}</Grid>
    </Grid>
  );
}
