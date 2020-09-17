import React, { FC, ChangeEvent, MouseEvent, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export type NavTabsProps = {
  tabValue: number;
  handleTabChange: (e: ChangeEvent<{}>, newValue: number) => void;
};

type TabItemType = {
  text: string;
  to: string;
  'aria-owns'?: string | undefined;
  'aria-haspopup'?: boolean | undefined;
  onMouseOver?: (event: MouseEvent<HTMLElement>) => void;
};

type menuOptionType = {
  name: string;
  link: string;
  index: number;
};

const menuOptions: menuOptionType[] = [
  {
    name: 'Services',
    link: '/services',
    index: 0,
  },
  {
    name: 'Custome Software Development',
    link: '/customsoftware',
    index: 1,
  },
  {
    name: 'Mobile App Development',
    link: '/mobileapps',
    index: 2,
  },
  {
    name: 'Website Development',
    link: '/websites',
    index: 3,
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    menuLayer: {
      zIndex: 1302,
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      '&:hover': {
        opacity: 0.9,
      },
      '&:focus': {
        opacity: 1.1,
      },
    },
  })
);

export const NavTabs: FC<NavTabsProps> = ({ tabValue, handleTabChange }) => {
  const classes = useStyles();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    menuOptions.forEach((menu) => {
      if (menu.link === location.pathname && menu.index !== selectedIndex) {
        setSelectedIndex(menu.index);
      }
    });
  }, [location, selectedIndex]);

  const TabItems: TabItemType[] = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Services',
      to: '/services',
      'aria-owns': anchorEl ? 'services-menu' : undefined,
      'aria-haspopup': anchorEl ? true : undefined,
      onMouseOver: (event) => handleMenuOpen(event),
    },
    {
      text: 'The Revolution',
      to: '/revolution',
    },
    {
      text: 'About Us',
      to: '/about',
    },
    {
      text: 'Contact Us',
      to: '/contact',
    },
  ];

  return (
    <>
      <Tabs
        className={classes.tabContainer}
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor='primary'>
        {TabItems.map((Item) => {
          return (
            <Tab
              key={Item.text}
              className={classes.tab}
              label={Item.text}
              component={Link}
              to={Item.to}
              aria-owns={Item['aria-owns']}
              aria-haspopup={Item['aria-haspopup']}
              onMouseOver={Item.onMouseOver}
            />
          );
        })}
      </Tabs>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button}
        component={Link}
        to='/estimate'>
        Free Estimate
      </Button>

      <Menu
        id='services-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        classes={{ paper: classes.menu }}
        style={{ zIndex: 1302 }}
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
    </>
  );
};
