import React, { FC, ReactElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

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

const Header: FC = () => {
  return (
    <ElevationScroll>
      <AppBar position='fixed'>
        <Toolbar>ACComponent</Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
export default Header;
