import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

type ListItemType = {
  text: string;
  to: string;
};

const ListItems: ListItemType[] = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Services',
    to: '/services',
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
  {
    text: 'Free Estimate',
    to: '/estimate',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawIcon: {
      height: 50,
      width: 50,
    },
    drawIconContainer: {
      marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    drawer: {
      backgroundColor: theme.palette.common.blue,
    },
    drawerText: {
      ...theme.typography.tab,
      color: 'white',
      opacity: 0.7,
    },
    estimateContainer: {
      backgroundColor: theme.palette.common.orange,
    },
  })
);

export const NavDrawer: FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        classes={{ paper: classes.drawer }}>
        <List disablePadding>
          {ListItems.map((Item) => (
            <ListItem
              component={Link}
              to={Item.to}
              divider
              button
              onClick={() => {
                setOpen(false);
              }}
              className={
                Item.to === '/estimate' ? classes.estimateContainer : undefined
              }>
              <ListItemText disableTypography className={classes.drawerText}>
                {Item.text}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawIconContainer}
        onClick={() => {
          setOpen((prevOpen) => !prevOpen);
        }}
        disableRipple>
        <MenuIcon className={classes.drawIcon} />
      </IconButton>
    </>
  );
};
