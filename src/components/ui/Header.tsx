import React, { ChangeEvent, MouseEvent, FC, useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { Link, useLocation } from 'react-router-dom';

import appLogo from 'assets/logo.svg';

interface ElevationScrollProps {
  children: React.ReactElement;
}

const ElevationScroll: FC<ElevationScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  }); //hysteresis 计算trigger时忽略滚动方向; threshold 触发trigger的水平高度

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  }); //包裹的孩子都会根据trigger变换elevation
};

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
];

type menuOptionType = {
  name: string;
  link: string;
};

const menuOptions: menuOptionType[] = [
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Custome Software Development',
    link: '/customsoftware',
  },
  {
    name: 'Mobile App Development',
    link: '/mobileapps',
  },
  {
    name: 'Website Development',
    link: '/websites',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarMargin: {
      ...theme.mixins.toolbar, //将toolbar的css解构给下面的占位div
      marginBottom: '1rem',
    },
    logo: {
      height: '5rem',
    },
    logoContainer: {
      padding: 0,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    tabContainer: {
      marginLeft: 'auto', //push all tabs to the right
    },
    tab: {
      ...theme.typography.tab,
      minWidth: '10px',
      marginLeft: '25px', //use specific pixel for the spacing
      borderRadius: '20%',
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 45,
      marginLeft: 50,
      marginRight: 25,
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: 'white',
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 1,
      },
    },
  })
);

const Header: FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabChange = (e: ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  const handleMenuOpen = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleMenuClick = (index: number) => {
    setSelectedIndex(index);
    handleMenuClose();
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
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
            <Tabs
              className={classes.tabContainer}
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor='primary'>
              <Tab
                className={classes.tab}
                label='Home'
                component={Link}
                to='/'
              />
              <Tab
                className={classes.tab}
                label='Services'
                component={Link}
                to='/services'
                aria-owns={anchorEl ? 'services-menu' : undefined}
                aria-haspopup={anchorEl ? true : undefined}
                onMouseOver={handleMenuOpen}
              />
              <Tab
                className={classes.tab}
                label='The Revolution'
                component={Link}
                to='/revolution'
              />
              <Tab
                className={classes.tab}
                label='About Us'
                component={Link}
                to='/about'
              />
              <Tab
                className={classes.tab}
                label='Contact Us'
                component={Link}
                to='/contact'
              />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}>
              Free Estimate
            </Button>

            <Menu
              id='services-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
              classes={{ paper: classes.menu }}
              elevation={0}>
              {/* elevation for layer */}
              {menuOptions.map((option, index) => (
                <MenuItem
                  key={option.name + index}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={() => handleMenuClick(index)}
                  selected={selectedIndex === index && tabValue === 1}>
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;
