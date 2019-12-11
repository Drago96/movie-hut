import { from } from 'rxjs';

import GenreList from 'types/GenreList';
import createRequestSlice from './utilities/createRequestSlice';

const genresSlice = createRequestSlice<{}, GenreList>({
  name: 'genres',
  requestHandler: ({ dependencies: { movieApi } }) =>
    from(movieApi.get<GenreList>('genre/movie/list'))
});

export default genresSlice;
