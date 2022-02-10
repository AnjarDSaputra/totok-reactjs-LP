import * as React from 'react';
import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MLink from '@mui/material/Link';
import ProTip from './ProTip';
import Album from './components/Albumts';
import Laman from './components/laman';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";
import BarWave from "react-cssfx-loading/lib/FadingDots";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FloatingWhatsApp from 'react-floating-whatsapp'

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 107, right: 43 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function App(props) {  


  const [data, setData] = useState([]);
  const [loading, setloading] = useState<true | null>(null) ;
  const [completed, setcompleted] = useState<true | null>(null);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <Box className='LoadingBox' sx={{
              minHeight: "100vh",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              backgroundColor: '#C2E8DC',
            
            }}>
           <BarWave color="#5eaf3b" width="110px" height="110px"/>
           {/* <Typography variant="body1" textAlign="center">  Memuat Halaman...</Typography> */}
           </Box>
          ) : (
            <Box  sx={{
              minHeight: "100vh",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              backgroundColor: '#C2E8DC',
              
            }}>
           <BarWave color="#5eaf3b" width="110px" height="110px"/>
           {/* <Typography variant="body1" textAlign="center">  Memuat Halaman...</Typography> */}
           </Box>
          )}
        </>
      ) : (
        <>
       
          <Layout>       
          <FloatingWhatsApp
        phoneNumber="6281228226567"
        accountName="Customer Services"
        chatMessage="Halo, ada yang bisa kami bantu?"
        avatar="/favicon2.png"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
        notificationSound
      />      
          <AppBar position="relative">
          <Toolbar color="primary" id="back-to-top-anchor" >
            <Typography color="white">Terapi Totok 431</Typography>
            </Toolbar>   
            </AppBar>  
          <ScrollTop sx={{backgroundColor:"#00ffae",
        mb:10}} {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon sx={{color:"white"}} />
        </Fab>
        </ScrollTop>
          <Laman/>
          </Layout>
        </>
      )}
    </>
  );
}
