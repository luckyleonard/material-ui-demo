import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import {
  makeStyles,
  createStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';
import { Typography, Button, useMediaQuery } from '@material-ui/core';
import ButtonArrow from 'components/ButtonArrow';
import background from 'assets/background.jpg';
import mobileBackground from 'assets/mobileBackground.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    learnMoreButton: {
      ...theme.typography.learnMoreButton,
      height: 45,
      width: 145,
      fontSize: '0.8rem',
      '& span': {
        marginRight: 5,
      },
    },
    backgroundContainer: {
      height: 'calc(100vh - 4rem)',
      //计算高度函数calc()
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${mobileBackground})`,
        backgroundAttachment: 'inherit',
      },
    },
    actionContainer: {
      marginLeft: '5rem',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        textAlign: 'center',
      },
    },
    estimateButton: {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 45,
      marginLeft: '1.5rem',
      marginRight: '5rem',
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
      [theme.breakpoints.down('sm')]: {
        margin: 0,
        marginTop: 10,
        textAlign: 'center',
      },
    },
  })
);

export default function CallToAction() {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      className={classes.backgroundContainer}
      alignItems='center'
      justify={matchSM ? 'center' : 'space-between'}
      direction={matchSM ? 'column' : 'row'}>
      <Grid item className={classes.actionContainer}>
        <Typography variant='h2'>
          Simple Software.
          <br />
          Revolution Result.
        </Typography>
        <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
          Take advantage of the 21st Century
        </Typography>
        <Button
          className={classes.learnMoreButton}
          variant='outlined'
          component={Link}
          to='/revolution'>
          <span>Learn More</span>
          <ButtonArrow
            width={15}
            height={15}
            fill={theme.palette.common.blue}
          />
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant='contained'
          color='secondary'
          className={classes.estimateButton}
          component={Link}
          to='/estimate'>
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
}
