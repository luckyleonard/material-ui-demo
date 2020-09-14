import React, { FC, ChangeEvent, MouseEvent, useState } from 'react';
import { Link } from 'react-router-dom';
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

export const NavTabs: FC<NavTabsProps> = ({ tabValue, handleTabChange }) => {
  const classes = useStyles();
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
  return (
    <>
      <Tabs
        className={classes.tabContainer}
        value={tabValue}
        onChange={handleTabChange}
        indicatorColor='primary'>
        <Tab className={classes.tab} label='Home' component={Link} to='/' />
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
      <Button variant='contained' color='secondary' className={classes.button}>
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
    </>
  );
};
