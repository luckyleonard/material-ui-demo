import React, { FC } from 'react';

import { Button, Grid, Typography } from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';

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
    mainContainer: {
      marginTop: '5rem',
      [theme.breakpoints.down('md')]: {
        marginTop: '3rem',
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '2rem',
      },
    },
    heroTextContainer: {
      minWidth: '21.5rem',
      marginLeft: '1rem',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
    buttonContainer: {
      marginTop: '1rem',
    },
    estimateButton: {
      ...theme.typography.estimate,
      height: 45,
      width: 145,
      marginRight: 40,
      borderRadius: 50,
      backgroundColor: theme.palette.common.orange,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
        //会根据secondary的main颜色生成light版本颜色
      },
    },
    learnMoreButton: {
      height: 45,
      width: 145,
      font: 'bold 0.8rem Roboto',
      textTransform: 'none',
      color: theme.palette.common.blue,
      border: `2px solid ${theme.palette.common.blue}`,
      borderRadius: 50,
      '& span': {
        marginRight: 10,
      },
    },
    animation: {
      maxWidth: '45rem',
      minWidth: '20rem',
      marginTop: '2rem',
      marginLeft: '10%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '30rem',
      },
    },
  })
);

/**
 * @todo replace the react-lottie with lottie-react
 */
const LandingPage: FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item>
        <Grid container justify='center' alignItems='center' direction='row'>
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant='h2' align='center'>
              Bringing Melbourne Technology
              <br /> to the Rest of World
            </Typography>
            <Grid
              container
              justify='center'
              className={classes.buttonContainer}>
              <Grid item>
                <Button className={classes.estimateButton} variant='contained'>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.learnMoreButton} variant='outlined'>
                  <span>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
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
