import React, { memo } from 'react';

import useGenres from 'hooks/useGenres';
import { Typography } from '@material-ui/core';

type Props = {
  genreIds: [number];
};

const Genres: React.FC<Props> = memo(({ genreIds }) => {
  const genres = useGenres(genreIds);

  return (
    <Typography variant="body1" color="textSecondary" component="div">
      Genres: {genres.map(genre => genre.name).join(', ')}
    </Typography>
  );
});

export default Genres;
