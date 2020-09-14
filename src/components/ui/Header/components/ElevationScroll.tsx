import { FC, ReactElement, cloneElement } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export interface ElevationScrollProps {
  children: ReactElement;
}

export const ElevationScroll: FC<ElevationScrollProps> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  }); //hysteresis 计算trigger时忽略滚动方向; threshold 触发trigger的水平高度

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  }); //包裹的孩子都会根据trigger变换elevation
};
