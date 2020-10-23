import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/theme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from 'components/ui/Header';
import Footer from 'components/ui/Footer';
import LandingPage from 'containers/LandingPage';
import ServicePage from 'containers/ServicePage';
import CustomSoftwarePage from 'containers/CustomSoftwarePage';
import MobileDevelopPage from 'containers/MobileDevelopPage';
import WebsiteDevelopPage from 'containers/WebsiteDevelopPage';
import RevolutionPage from 'containers/RevolutionPage';
import AboutUsPage from 'containers/AboutUsPage';
import ContactUsPage from 'containers/ContactUsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <body style={{ minHeight: '50vh' }}>
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <Route exact path='/services'>
              <ServicePage />
            </Route>
            <Route exact path='/customsoftware'>
              <CustomSoftwarePage />
            </Route>
            <Route exact path='/mobileapps'>
              <MobileDevelopPage />
            </Route>
            <Route exact path='/websites'>
              <WebsiteDevelopPage />
            </Route>
            <Route exact path='/revolution'>
              <RevolutionPage />
            </Route>
            <Route exact path='/about'>
              <AboutUsPage />
            </Route>
            <Route exact path='/contact'>
              <ContactUsPage />
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
