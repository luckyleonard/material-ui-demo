import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import footerAdornment from 'assets/Footer Adornment.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.common.blue,
      width: '100%',
      zIndex: theme.zIndex.modal + 2,
      position: 'relative',
      // relative才能使zIndex生效
    },
    adornment: {
      width: '25rem',
      verticalAlign: 'bottom',
      [theme.breakpoints.down('md')]: {
        width: '21rem',
      },
      [theme.breakpoints.down('md')]: {
        width: '15rem',
      },
    },
    mainContainer: {
      position: 'absolute',
    },
    gridItem: {
      margin: '3rem',
    },
    link: {
      color: 'white',
      fontFamily: 'Arial',
      fontSize: '0.75rem',
      fontWeight: 700,
      textDecoration: 'none',
    },
  })
);

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container justify='center' className={classes.mainContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item className={classes.link} component={Link} to='/'>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/services'>
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/customsoftware'>
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/mobileapps'>
                Mobile App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/websites'>
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/revolution'>
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/revolution'>
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/revolution'>
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/revolution'>
                Processs
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid item className={classes.link} component={Link} to='/about'>
                About Us
              </Grid>
              <Grid item className={classes.link} component={Link} to='/about'>
                History
              </Grid>
              <Grid item className={classes.link} component={Link} to='/about'>
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction='column' spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                to='/contact'>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>

      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
    </footer>
  );
};

export default Footer;
