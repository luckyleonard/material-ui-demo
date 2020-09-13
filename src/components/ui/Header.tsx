import React, { FC, ReactElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbarMargin: {
      ...theme.mixins.toolbar, //将toolbar的css解构给下面的占位div
      marginBottom: '3rem',
    },
    logo: {
      height: '7rem',
    },
  })
);

const Header: FC = () => {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            {/* 禁止左右margin */}
            <img src={appLogo} alt='Company logo' />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;
