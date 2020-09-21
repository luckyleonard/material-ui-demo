import React, { FC } from 'react';

import { Button, Grid, Typography, Card, CardContent } from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';

import ButtonArrow from 'components/ButtonArrow';
import revolutionBackground from 'assets/repeatingBackground.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    blockContainer: {
      height: '200vh',
      marginTop: '20vh',
      backgroundImage: `url(${revolutionBackground})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    revolutionCard: {
      padding: '20vh',
      boxShadow: theme.shadows[10],
      borderRadius: 15,
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: '20vh 0',
        borderRadius: 0,
      },
    },
    learnMoreButton: {
      ...theme.typography.learnMoreButton,
      height: 45,
      width: 145,
      fontSize: '0.8rem',
      '& span': {
        marginRight: 10,
      },
    },
  })
);

export const RevolutionBlock: FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid item>
      <Grid
        container
        justify='center'
        alignItems='center'
        className={classes.blockContainer}>
        <Card className={classes.revolutionCard}>
          <CardContent>
            <Grid container direction='column' style={{ textAlign: 'center' }}>
              <Grid item>
                <Typography variant='h3' gutterBottom>
                  The Revolution
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='subtitle1'>
                  Visionary insights coupled with cutting-edge technology is a
                  recipe for revolution
                </Typography>
                <Button className={classes.learnMoreButton} variant='outlined'>
                  <span>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
