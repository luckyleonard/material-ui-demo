import React, { FC } from 'react';

import { Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { HeroBlock, ServiceBlock } from './components';

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
  })
);

const LandingPage: FC = () => {
  const classes = useStyles();

  return (
    <Grid container direction='column' className={classes.mainContainer}>
      <HeroBlock />
      <ServiceBlock />
    </Grid>
  );
};

export default LandingPage;
