import React from 'react';
import { List } from '@material-ui/core';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { ArrowBackIos, ArrowForwardIos, Theaters } from '@material-ui/icons';
import { useHistory } from 'react-router';

import MovieListItem from 'types/MovieListItem';
import Heading from 'components/UI/Heading/Heading';
import useStyles from './useStyles';
import MovieHorizontalListItem from './MovieHorizontalListItem';

type Props = {
  movies: MovieListItem[];
  heading: string;
};

const MovieHorizontalList: React.FC<Props> = ({ heading, movies }) => {
  const history = useHistory();

  const classes = useStyles();

  const handleSelect = (movieId: string | number | null) =>
    history.push(`/movie/${movieId}`);

  return (
    <>
      <Heading className={classes.heading}>
        <Theaters className={classes.headingIcon} />
        {heading}
      </Heading>
      <List>
        <ScrollMenu
          data={movies.map(movie => (
            <MovieHorizontalListItem key={movie.id} movie={movie} />
          ))}
          arrowLeft={<ArrowBackIos />}
          arrowRight={<ArrowForwardIos />}
          inertiaScrolling={false}
          wheel={false}
          onSelect={handleSelect}
          menuClass={classes.menu}
          innerWrapperClass={classes.itemWrapper}
        />
      </List>
    </>
  );
};

export default MovieHorizontalList;
