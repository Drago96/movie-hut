import { from } from 'rxjs';

import GenreList from 'types/GenreList';
import createRequestSlice from './utilities/createRequestSlice';

const genreListSlice = createRequestSlice<{}, GenreList>({
  name: 'genreList',
  requestHandler: ({ dependencies: { movieApi } }) =>
    from(movieApi.get<GenreList>('/genre/movie/list'))
});

export default genreListSlice;
