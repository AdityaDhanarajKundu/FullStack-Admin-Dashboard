import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import { useMemo } from 'react';
import {useSelector} from 'react-redux'; // hook function to select and access the state data from the redux store
import { themeSettings } from './theme';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

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
              <Route path='/' element={<Navigate to={"/dashboad"} replace />} />
            </Route>
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
