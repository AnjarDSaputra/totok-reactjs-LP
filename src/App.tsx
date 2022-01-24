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
export default function App() {  


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
          <Laman/>
          </Layout>
        </>
      )}
    </>
  );
}
