import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';

import appLogo from 'assets/logo.svg';
import { ElevationScroll, NavDrawer, NavTabs } from './components';

type PathToTabType = {
  pathes: string[];
  value: number;
};

const pathToTab: PathToTabType[] = [
  {
    pathes: ['/'],
    value: 0,
  },
  {
    pathes: ['/services', '/customsoftware', '/mobileapps', '/websites'],
    value: 1,
  },
  {
    pathes: ['/revolution'],
    value: 2,
  },
  {
    pathes: ['/about'],
    value: 3,
  },
  {
    pathes: ['/contact'],
    value: 4,
  },
  {
    pathes: ['/estimate'],
    value: 5,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarMargin: {
      ...theme.mixins.toolbar, //将toolbar的css解构给下面的占位div
      marginBottom: '3rem',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '2rem',
      },
      [theme.breakpoints.down('xs')]: {
        marginBottom: '1.5rem',
      },
    },
    logo: {
      height: '7rem',
      [theme.breakpoints.down('sm')]: {
        height: '6rem',
      },
      [theme.breakpoints.down('xs')]: {
        height: '5rem',
      },
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  })
);

const Header: FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (e: ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    pathToTab.forEach((item) => {
      if (
        item.pathes.find((path) => path === location.pathname) &&
        tabValue !== item.value
      ) {
        setTabValue(item.value);
      }
    });
  }, [location.pathname, tabValue]);

  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            {/* disableGutters 禁止左右margin */}
            <Button
              component={Link}
              to='/'
              className={classes.logoContainer}
              disableRipple>
              {/* disableRipple use to stop the click animation*/}
              <img src={appLogo} alt='Company logo' className={classes.logo} />
            </Button>
            {matches ? (
              <NavDrawer tabValue={tabValue} />
            ) : (
              <NavTabs tabValue={tabValue} handleTabChange={handleTabChange} />
            )}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;
