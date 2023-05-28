// import { ThemeProvider } from '@mui/material';
import './App.css';
// import { createDefaultTheme } from './assets/theme/createDefaultTheme';
import { AppRouterProvider } from './common/AppRouterProvider';

function App() {
  return (
    // <ThemeProvider theme={createDefaultTheme()}>
    <AppRouterProvider />
    // </ThemeProvider>
  );
}

export default App;
