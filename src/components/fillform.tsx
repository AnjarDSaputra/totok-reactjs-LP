import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
export default function fillform() {  
  
return (
  
  <Container maxWidth="md">
  {/* <Box alignItems="center"  sx={{ backgroundColor: "#C2E8DC", borderRadius: 4, p: 2 }}> */}
    <Grid container alignItems="center" spacing={4}>
    <Grid item xs={12} sm={6}>
    <Typography variant="h6" gutterBottom>
      INFO PASIEN
    </Typography>
    </Grid>
    <Container>
      <Grid item xs={12} md={6}>
        <TextField sx={{ mb: 2 , marginLeft:1}}
          required
          id="cardName"
          label="Nama"
          fullWidth
          autoComplete="cc-name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField sx={{ mb: 2 , marginLeft:1}}
          required
          id="cardNumber"
          label="Alamat"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField sx={{ mb: 2 , marginLeft:1}}
          required
          id="expDate"
          label="No Handphone"
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField sx={{ mb: 2 , marginLeft:1}}
          required
          id="cvv"
          label="Keluhan"
          helperText="sebutkan agar mudah mendiagnosanya"
          fullWidth
          autoComplete="cc-csc"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="secondary" name="saveCard" value="yes" />}
          label="Saya Setuju untuk memberikan informasi ini"
        />
      </Grid>
      <Grid alignItems="center" >
      <Button 
          color="primary"
          variant="contained"
          sx={{ mt: 2 , marginLeft:2}}
        >
          Kirim Pesan
        </Button>
        </Grid>
        </Container>
    </Grid>
    {/* </Box> */}
    </Container>
  );
}