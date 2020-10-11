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
import infoBackground from 'assets/infoBackground.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blockContainer: {
      height: 'calc(100vh - 4rem)',
      backgroundImage: `url(${infoBackground})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    aboutUsItem: {
      marginLeft: '5rem',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        textAlign: 'center',
      },
    },
    contactUsItem: {
      marginRight: '5rem',
      textAlign: 'right',
      [theme.breakpoints.down('sm')]: {
        marginRight: 0,
        textAlign: 'center',
      },
      // 文字及button向右对齐
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
  const matchXS = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid item>
      <Grid
        container
        direction={matchXS ? 'column' : 'row'}
        alignItems='center'
        justify={matchXS ? 'space-around' : undefined}
        className={classes.blockContainer}>
        <Grid item sm className={classes.aboutUsItem}>
          <Typography variant='h2' gutterBottom style={{ color: 'white' }}>
            About us
          </Typography>
          <Typography variant='subtitle2'>Let's get personal.</Typography>
          <Button
            className={classes.learnMoreButton}
            variant='outlined'
            component={Link}
            to='/about'>
            <span>Learn More</span>
            <ButtonArrow
              width={10}
              height={10}
              fill={theme.palette.common.white}
            />
          </Button>
        </Grid>
        <Grid item sm className={classes.contactUsItem}>
          <Typography variant='h2' gutterBottom style={{ color: 'white' }}>
            Contact us
          </Typography>
          <Typography variant='subtitle2'>
            Say hello!!
            <span role='img' aria-label='waving hand'>
              👋
            </span>
            {/* emoji要用span包裹起来 */}
          </Typography>
          <Button
            className={classes.learnMoreButton}
            variant='outlined'
            component={Link}
            to='/contact'>
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
