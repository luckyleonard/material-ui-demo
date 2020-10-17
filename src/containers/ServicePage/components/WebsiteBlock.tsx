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
import websiteIcon from 'assets/websiteIcon.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blockContainer: {
      margin: '10rem auto',
      [theme.breakpoints.down('sm')]: {
        marginTop: '6rem',
        marginBottom: '6rem',
        padding: 25,
      },
    },
    serviceInfo: {
      width: '35em',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
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
    iconContainer: {
      marginRight: '5rem',
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
      },
    },
    icon: {
      width: '20em',
      marginLeft: '1.75rem',
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
      },
    },
  })
);

export const WebSiteBlock: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid item>
      <Grid
        container
        className={classes.blockContainer}
        direction='row'
        justify={matchSM ? 'center' : 'flex-end'}>
        <Grid item className={classes.serviceInfo}>
          <Typography variant='h4'>Website Development</Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Reach More. Discover More. Sell More.
          </Typography>
          <Typography variant='subtitle1'>
            Optimized for Search Engines. Build for Speed.
          </Typography>
          <Button
            className={classes.learnMoreButton}
            variant='outlined'
            component={Link}
            to='/websites'>
            <span>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item className={classes.iconContainer}>
          <img alt='website icon' src={websiteIcon} className={classes.icon} />
        </Grid>
      </Grid>
    </Grid>
  );
};
