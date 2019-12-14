import { from, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

import HomeData from 'types/HomeData';
import MovieList from 'types/MovieList';
import createRequestSlice from './utilities/createRequestSlice';

const homeDataSlice = createRequestSlice<{}, HomeData>({
  name: 'homeData',
  requestHandler: ({ dependencies: { movieApi } }) =>
    zip(
      from(movieApi.get<MovieList>('/movie/now_playing')),
      from(movieApi.get<MovieList>('/movie/upcoming'))
    ).pipe(
      map(([nowPlayingData, upcomingData]) => {
        const nowPlaying = nowPlayingData.data;
        const upcoming = upcomingData.data;

        return {
          data: {
            nowPlaying,
            upcoming
          }
        } as AxiosResponse<HomeData>;
      })
    )
});

export default homeDataSlice;
