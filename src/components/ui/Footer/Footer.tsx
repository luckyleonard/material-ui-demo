import React, { FC } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import footerAdornment from 'assets/Footer Adornment.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.common.blue,
      width: '100%',
      zIndex: theme.zIndex.modal + 2,
      position: 'relative',
    },
    adornment: {
      width: '25em',
      verticalAlign: 'bottom',
      [theme.breakpoints.down('md')]: {
        width: '21em',
      },
      [theme.breakpoints.down('md')]: {
        width: '15em',
      },
    },
  })
);

const Footer: FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img
        alt='black decorative slash'
        src={footerAdornment}
        className={classes.adornment}
      />
      example footer
    </footer>
  );
};

export default Footer;
