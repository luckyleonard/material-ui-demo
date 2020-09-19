import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import LandingPage from 'containers/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <body style={{ minHeight: '60vh' }}>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/services'>
              <div>services</div>
            </Route>
            <Route exact path='/customsoftware'>
              <div>customsoftware</div>
            </Route>
            <Route exact path='/mobileapps'>
              <div>mobileapps</div>
            </Route>
            <Route exact path='/websites'>
              <div>websites</div>
            </Route>
            <Route exact path='/revolution'>
              <div>revolution</div>
            </Route>
            <Route exact path='/about'>
              <div>about</div>
            </Route>
            <Route exact path='/contact'>
              <div>contact</div>
            </Route>
            <Route exact path='/estimate'>
              <div>estimate</div>
            </Route>
          </Switch>
        </body>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
