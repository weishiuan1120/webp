import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './App';
import { ThemeProvider} from '@mui/material/styles';
import  theme  from './Theme';
const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <LoginPage />
      </ThemeProvider>
  </React.StrictMode>,
  rootElement
);