import { Typography, Box } from "@mui/material";

export default function Footer(): JSX.Element {
  return (
    <Box sx={{ py: 12 }}>
      <Typography variant="body2" align="center">
        {"Copyright © TT431 "}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  );
}
