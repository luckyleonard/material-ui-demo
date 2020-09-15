import React, { FC, useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

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
        }}>
        Example Drawer
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
