import React, { FC } from 'react';

import { Button, Grid, Typography } from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';

import ButtonArrow from 'components/ButtonArrow';
import infoBackground from 'assets/infoBackground.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blockContainer: {
      height: '90vh',
      backgroundImage: `url(${infoBackground})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    aboutUsItem: {
      marginLeft: '5rem',
    },
    learnMoreButton: {
      ...theme.typography.learnMoreButton,
      color: 'white',
      borderColor: 'white',
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
  })
);

export const InformationBlock: FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item>
      <Grid
        container
        direction='row'
        alignItems='center'
        className={classes.blockContainer}>
        <Grid item className={classes.aboutUsItem}>
          <Typography variant='h2' gutterBottom style={{ color: 'white' }}>
            About us
          </Typography>
          <Typography variant='subtitle2'>Let's get personal.</Typography>
          <Button className={classes.learnMoreButton} variant='outlined'>
            <span>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.white}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
