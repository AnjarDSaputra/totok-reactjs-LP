import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MLink from '@mui/material/Link';
import ProTip from './ProTip';
import Album from './components/Albumts';
import Laman from './components/laman';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>
    <Laman/>
    </Layout>
  );
}
