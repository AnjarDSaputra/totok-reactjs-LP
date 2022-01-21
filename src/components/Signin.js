import React from 'react';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Box } from '@mui/material';
function Signin() {
  return (
    <div>
      <Box
        sx={{
          my: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Typography variant="h4"> Sign In </Typography>
        <TextField
          label="Email Address"
          required
          id="email"
          name="email"
          margin="normal"
        />
        <TextField
          label="Password"
          required
          id="password"
          name="password"
          type="password"
          margin="normal"
        />
        <Link
          href="#"
          sx={{ mr: 12, mb: 2 }}
        >
          forget password?
        </Link>
        <Button
          color="secondary"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
}
export default Signin;

// ref https://www.makeuseof.com/what-is-mui-how-to-use-reactjs-projects/