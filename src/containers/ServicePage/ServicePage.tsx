import React, { FC } from 'react';

import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import { MobileBlock, ServiceBlock, WebSiteBlock } from './components';

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
    title: {
      marginLeft: '5rem',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },
    },
  })
);

const ServicePage: FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <Grid item className={classes.title}>
        <Typography
          align={matchSM ? 'center' : undefined}
          variant='h2'
          gutterBottom>
          Services
        </Typography>
      </Grid>
      <MobileBlock />
      <ServiceBlock />
      <WebSiteBlock />
    </Grid>
  );
};

export default ServicePage;
