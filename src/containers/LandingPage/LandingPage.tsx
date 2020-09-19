import React, { FC } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Lottie from 'react-lottie';
import animationData from 'animations/landinganimation/data';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));

/**
 * @todo replace the react-lottie with lottie-react
 */
const LandingPage: FC = () => {
  return (
    <div>
      Landing Page
      <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
    </div>
  );
};

export default LandingPage;
