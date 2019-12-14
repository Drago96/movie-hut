import React from 'react';
import { Paper, Typography } from '@material-ui/core';

import useInitiateRequestSlice from 'hooks/useInitiateRequestSlice';
import MovieHorizontalList from 'components/MovieHorizontalList/MovieHorizontalList';
import homeDataSlice from 'store/slices/homeDataSlice';
import useStyles from './useStyles';

const Home = () => {
  const classes = useStyles();

  const { data } = useInitiateRequestSlice(homeDataSlice, {
    showLoadingOverlay: true
  });

  if (!data) {
    return null;
  }

  return (
    <>
      <Paper className={classes.banner}>
        <Typography variant="h4" component="h1">
          Welcome to Movie Hut!
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Your number one source for anything new related to the world of Cinema
        </Typography>
      </Paper>
      <MovieHorizontalList heading="Now Playing" movies={data.nowPlaying.results} />
      <MovieHorizontalList heading="Upcoming" movies={data.upcoming.results} />
    </>
  );
};

export default Home;
