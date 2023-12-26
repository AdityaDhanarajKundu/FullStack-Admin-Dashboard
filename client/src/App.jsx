import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import { useMemo } from 'react';
import {useSelector} from 'react-redux'; // hook function to select and access the state data from the redux store
import { themeSettings } from './theme';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import Dashboard from './scenes/Dashboard';
import Layout from './scenes/Layout';
import Products from "./scenes/Products";
import Customers from "./scenes/Customers";
import Transactions from './scenes/Transactions';
import Geography from "./scenes/Geography";
import Overview from './scenes/Overview';
import Daily from './scenes/Daily';

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
              <Route path='/customers' element={<Customers />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/overview' element={<Overview />} />
              <Route path='/daily' element={<Daily />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
