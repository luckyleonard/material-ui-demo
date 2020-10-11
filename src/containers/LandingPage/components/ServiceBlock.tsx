import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';

import ButtonArrow from 'components/ButtonArrow';
import customSoftwareIcon from 'assets/Custom Software Icon.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    serviceContainer: {
      marginTop: '10rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: '6rem',
        padding: 25,
      },
    },
    serviceInfo: {
      marginLeft: '5rem',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        textAlign: 'center',
      },
    },
    subtitle: {
      marginBottom: '1rem',
    },
    specialText: {
      fontFamily: 'Pacifico',
      color: theme.palette.common.orange,
    },
    learnMoreButton: {
      ...theme.typography.learnMoreButton,
      height: 35,
      padding: 5,
      fontSize: '0.7rem',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '2rem',
      },
      '& span': {
        marginRight: 10,
      },
    },
    icon: {
      marginLeft: '1.75rem',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
  })
);

export const ServiceBlock: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item>
      <Grid
        container
        className={classes.serviceContainer}
        direction='row'
        justify={matchSM ? 'center' : undefined}>
        <Grid item className={classes.serviceInfo}>
          <Typography variant='h4'>Custom Software Development</Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Save Money. Save Time. Save Energy.
          </Typography>
          <Typography variant='subtitle1'>
            Complete digital solutions, from investigation to{' '}
            <span className={classes.specialText}>celebration.</span>
          </Typography>
          <Button
            className={classes.learnMoreButton}
            variant='outlined'
            component={Link}
            to='/customsoftware'>
            <span>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item>
          <img
            alt='custom software icon'
            src={customSoftwareIcon}
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
