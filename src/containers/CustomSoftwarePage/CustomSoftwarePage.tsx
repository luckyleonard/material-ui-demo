import React, { FC } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

import { Grid, IconButton, Typography, useMediaQuery } from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';

import backArrow from 'assets/backArrow.svg';
import forwardArrow from 'assets/forwardArrow.svg';
import lightbulb from 'assets/bulb.svg';
import cash from 'assets/cash.svg';
import stopwatch from 'assets/stopwatch.svg';
import roots from 'assets/root.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rowContainer: {
      paddingLeft: '5em',
      paddingRight: '5em',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '1.5em',
        paddingRight: '1.5em',
      },
    },
  })
);

export const CustomSoftwarePage: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid item>
          <IconButton>
            <img src={backArrow} alt='back to service page' />
          </IconButton>
        </Grid>
        <Grid item container direction='column'>
          <Grid item>
            <Typography variant='h2' align={matchSM ? 'center' : undefined}>
              Custom Software Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              align={matchSM ? 'center' : undefined}
              paragraph>
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography
              align={matchSM ? 'center' : undefined}
              variant='body1'
              paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography
              align={matchSM ? 'center' : undefined}
              variant='body1'
              paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography
              align={matchSM ? 'center' : undefined}
              variant='body1'
              paragraph>
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <IconButton>
            <img src={forwardArrow} alt='forward to mobile page' />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction='row'
        justify='center'
        style={{ marginTop: '15em', marginBottom: '20em' }}
        className={classes.rowContainer}>
        <Grid
          item
          direction='column'
          alignItems='center'
          style={{ maxWidth: '40em' }}>
          <Typography variant='h4'>Save Energy</Typography>
          <img src={lightbulb} alt='lightbulb' />
        </Grid>
        <Grid
          item
          direction='column'
          alignItems='center'
          style={{
            maxWidth: '40em',
            marginTop: matchSM ? '10em' : 0,
            marginBottom: matchSM ? '10em' : 0,
          }}>
          <Typography variant='h4'>Save Time</Typography>
          <img src={stopwatch} alt='stopwatch' />
        </Grid>
        <Grid
          item
          direction='column'
          alignItems='center'
          style={{ maxWidth: '40em' }}>
          <Typography variant='h4'>Save Money</Typography>
          <img src={cash} alt='cash' />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomSoftwarePage;
