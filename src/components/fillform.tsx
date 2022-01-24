import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Autocomplete } from '@mui/material';
import { typography } from '@mui/system';
import ReactiveButton from 'reactive-button';
import {  useState } from "react";

const options = ['1', '2', '3', 
  '4', '5', 'lebih dari 5']
  
function mobilecheck() {
  var check = false;
  (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor);
  return check;
}

export function sendWA(phone:any, message:any) {
  var isMobile = mobilecheck();

  var apilink = 'http://';

  apilink += isMobile ? 'api' : 'web';
  apilink += '.whatsapp.com/send?phone=' + phone + '&text=' + (message);
  window.open(apilink, '_self');
}



export default function fillform() {  

  const [status, setState] = useState('idle');

 function sendtoDB(nama:any, alamat:any,hp:any,keluhan:any,terapi:any)
{
  var axios = require('axios');
  var data = JSON.stringify({
      "operation": "insert",
      "schema": "Totok431Pasien",
      "table": "Pasien",
      "records": [
          {
              "id": null,
              "nama": nama,
              "alamat": alamat,
              "nohp": hp,
              "keluhan": keluhan,
              "terapi": terapi
          }
      ]
  });
  
  var config = {
    method: 'post',
    url: 'https://terapi-totok-recreate.harperdbcloud.com',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Basic dGVyYXBpX3RvdG9rOjEyM3F3ZWFzZHp4Yw=='
    },
    data : data
  };
  
  axios(config)
  .then(function (response) {
    
    const WaPhone = "6281228226567";
    const datatext =  "Nama: "+nama+"%0aAlamat: "+alamat+"%0aNo Handphone: "+hp+"%0aKeluhan: "+keluhan+"%0aTerapi: "+terapi+"%0aDapat Info Dari Website";
    
    setState('success');   
    sendWA(WaPhone, datatext);
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
}


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    setState('loading');
    const data = new FormData(event.currentTarget);
    const datatext =  "Nama: "+data.get('IdNama')+"%0aAlamat: "+data.get('IdAlamat')+"%0aNo Handphone: "+data.get('IdHp')+"%0aKeluhan: "+data.get('IdKeluhan')+"%0aTerapi: "+data.get('IdTerapi')+"%0aDapat Info Dari Website";
    sendtoDB(data.get('IdNama'),data.get('IdAlamat'),data.get('IdHp'),data.get('IdKeluhan'),data.get('IdTerapi'));
  };
  
return (
  <Container maxWidth="md">
      <Grid container alignItems="center" spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            INFO PASIEN
          </Typography>
        </Grid>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Container>
            <Grid item xs={12} md={12}>
              <TextField sx={{ mb: 2, marginLeft: 1 }}
                required
                id="IdNama"
                name="IdNama"
                label="Nama"
                fullWidth
                autoComplete="cc-name"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField sx={{ mb: 2, marginLeft: 1 }}
                required
                id="IdAlamat"
                name="IdAlamat"
                label="Alamat"
                fullWidth
                autoComplete="cc-alamat"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField sx={{ mb: 2, marginLeft: 1 }}
                required
                id="IdHp"
                name="IdHp"
                label="No Handphone"
                fullWidth
                autoComplete="cc-hp"
                variant="standard" />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField sx={{ mb: 2, marginLeft: 1 }}
                required
                id="IdKeluhan"
                name="IdKeluhan"
                label="Keluhan"
                helperText="Sebutkan agar mudah mendiagnosanya"
                fullWidth
                autoComplete="cc-penyakit"
                variant="standard" />
            </Grid>
            <Grid>
              <Autocomplete
                options={options}
                style={{ width: 300 }}
                renderInput={(params) => <TextField sx={{ mb: 2, marginLeft: 1 }} {...params} label="Kunjungan Terapi" autoComplete="cc-terapi"
                  name="IdTerapi" id="IdTerapi" variant="outlined" />} />
            </Grid>
            <Grid alignItems="center">
              <ReactiveButton
                buttonState={status}
                type="submit"
                onClick={handleSubmit}
                color={'green'}
                loadingText={'Loading'}
                successText={'Success'}
                errorText={'Error'}
                className={'class1 class2'}
                style={{ borderRadius: '5px' }}
                outline={false}
                shadow={false}
                rounded={false}
                size={'normal'}
                block={false}
                messageDuration={2000}
                disabled={false}
                buttonRef={null}
                width={null}
                height={null}
                animation={true}
                idleText={"Kirim Pesan"}
            />
            </Grid>
          </Container>
        </Box>
      </Grid>
    </Container>
  
  );
}