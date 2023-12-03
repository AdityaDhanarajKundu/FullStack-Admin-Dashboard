import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import { useMemo } from 'react';
import {useSelector} from 'react-redux'; // hook function to select and access the state data from the redux store
import { themeSettings } from 'theme';

function App() {

  const mode = useSelector((store)=> store.global.mode); // access the state data from the redux store
  const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode]); // create a theme object based on the mode state data
  
  return (
    <div className="app">
      <h1>App</h1>
    </div>
  )
}

export default App;
