import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export type NavDrawerProps = {
  tabValue: number;
};

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

type ListItemType = {
  text: string;
  to: string;
  value: number;
};

const ListItems: ListItemType[] = [
  {
    text: 'Home',
    to: '/',
    value: 0,
  },
  {
    text: 'Services',
    to: '/services',
    value: 1,
  },
  {
    text: 'The Revolution',
    to: '/revolution',
    value: 2,
  },
  {
    text: 'About Us',
    to: '/about',
    value: 3,
  },
  {
    text: 'Contact Us',
    to: '/contact',
    value: 4,
  },
  {
    text: 'Free Estimate',
    to: '/estimate',
    value: 5,
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
    drawerTextSelected: {
      '& .MuiListItemText-root': {
        //当drawerItem选中时候需要向下选择一层到ItemText的样式进行覆盖
        opacity: 1,
      },
    },
    estimateContainer: {
      backgroundColor: theme.palette.common.orange,
    },
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
  })
);

export const NavDrawer: FC<NavDrawerProps> = ({ tabValue }) => {
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
        <div className={classes.toolbarMargin} />
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
              }
              classes={{ selected: classes.drawerTextSelected }}
              selected={Item.value === tabValue}>
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
