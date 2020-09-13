import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <div>Home</div>
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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
