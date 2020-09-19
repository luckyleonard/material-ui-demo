import React, { FC } from 'react';

import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Lottie from 'react-lottie';
import animationData from 'animations/landinganimation/data';
import ButtonArrow from 'components/ButtonArrow';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    animation: {
      maxWidth: '50rem',
      minWidth: '21rem',
      marginTop: '2rem',
      marginLeft: '10%',
    },
  })
);

/**
 * @todo replace the react-lottie with lottie-react
 */
const LandingPage: FC = () => {
  const classes = useStyles();
  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container justify='center' alignItems='center' direction='row'>
          <Grid item sm>
            <Typography variant='h2' align='center'>
              Bringing Melbourne Technology
              <br /> to the Rest of World
            </Typography>
            <Grid container>
              <Grid item>
                <Button variant='contained'>Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined'>
                  Learn More
                  <ButtonArrow width={15} height={15} fill='red' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm className={classes.animation}>
            <Lottie options={defaultOptions} height={'100%'} width={'100%'} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
