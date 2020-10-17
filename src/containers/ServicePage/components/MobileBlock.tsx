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
import mobileIcon from 'assets/mobileIcon.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blockContainer: {
      marginTop: '5rem',
      [theme.breakpoints.down('sm')]: {
        marginTop: '1rem',
        padding: 25,
      },
    },
    blockInfo: {
      width: '35em',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center',
      },
    },
    subtitle: {
      marginBottom: '1rem',
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

export const MobileBlock: FC = () => {
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
        <Grid item className={classes.blockInfo}>
          <Typography variant='h4'>iOS/Android App Development</Typography>
          <Typography variant='subtitle1' className={classes.subtitle}>
            Extend Functionality. Extend Access. Increase Engagement.
          </Typography>
          <Typography variant='subtitle1'>
            Integrate your web experience or create a standalone app
            {matchSM ? null : <br />}with either mobile platform.
          </Typography>
          <Button
            className={classes.learnMoreButton}
            variant='outlined'
            component={Link}
            to='/mobileapps'>
            <span>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.blue}
            />
          </Button>
        </Grid>
        <Grid item className={classes.iconContainer}>
          <img
            alt='mobile devices icon'
            src={mobileIcon}
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
