import React from 'react';
import Header from './components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello world!
    </ThemeProvider>
  );
}

export default App;
