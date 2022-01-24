import * as React from 'react';
import  {useRef} from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />  
    <App />    
  </ThemeProvider>,
  rootElement,
);
