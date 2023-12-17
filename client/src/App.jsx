import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import { useMemo } from 'react';
import {useSelector} from 'react-redux'; // hook function to select and access the state data from the redux store
import { themeSettings } from './theme';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Dashboard from './scenes/Dashboard';
import Layout from './scenes/Layout';
import Products from "./scenes/Products";

function App() {

  const mode = useSelector((store)=> store.global.mode); // access the state data from the redux store
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]); // create a theme object based on the mode state data
  
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to={"/dashboard"} replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/products' element={<Products />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
