import React, { memo } from 'react';

import useGenres from 'hooks/useGenres';
import GenreList from 'components/Movie/GenreList';

type Props = {
  genreIds: [number];
};

const Genres: React.FC<Props> = memo(({ genreIds }) => {
  const genres = useGenres(genreIds);

  return <GenreList genres={genres} />;
});

export default Genres;
