import React from 'react';
import { ListItem, Box } from '@material-ui/core';

import MovieListItemType from 'types/MovieListItem';
import Poster from 'components/Movie/Poster';

type Props = {
  movie: MovieListItemType;
};

const MovieHorizontalListItem: React.FC<Props> = ({ movie }) => (
  <ListItem key={movie.id}>
    <Box width={200}>
      <Poster
        draggable={false}
        width={200}
        posterPath={movie.posterPath}
        title={movie.title}
      />
    </Box>
  </ListItem>
);

export default MovieHorizontalListItem;
