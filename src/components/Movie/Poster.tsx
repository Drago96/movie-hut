import React, { ImgHTMLAttributes } from 'react';

import ImgWithFallback from 'components/UI/ImgWithFallback/ImgWithFallback';
import posterNotFound from 'assets/images/poster-not-found.jpg';
import createMovieImageUrl from 'utilities/createMovieImageUrl';

type OwnProps = {
  posterPath: string;
  title: string;
  width: number;
};

type Props = OwnProps & ImgHTMLAttributes<any>;

const Poster: React.FC<Props> = ({ posterPath, title, width, ...props }) => {
  return (
    <ImgWithFallback
      {...props}
      src={createMovieImageUrl({
        width,
        relativeUrl: posterPath
      })}
      alt={title}
      title={title}
      fallbackUrl={posterNotFound}
    />
  );
};

export default Poster;
