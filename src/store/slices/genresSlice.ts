import { from } from 'rxjs';

import createRequestSlice from './utilities/createRequestSlice';

const genresSlice = createRequestSlice({
  name: 'genres',
  requestHandler: ({ dependencies: { movieApi } }: any) =>
    from(movieApi.get('genre/movie/list'))
});

export default genresSlice;
