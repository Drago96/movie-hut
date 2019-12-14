import React, { ImgHTMLAttributes, forwardRef } from 'react';

import ImgWithFallback from 'components/UI/ImgWithFallback/ImgWithFallback';
import posterNotFound from 'assets/images/poster-not-found.jpg';
import createMovieImageUrl from 'utilities/createMovieImageUrl';

type OwnProps = {
  posterPath: string;
  title: string;
  width: number;
};

type Props = OwnProps & ImgHTMLAttributes<any>;

const Poster = forwardRef<HTMLImageElement, Props>(
  ({ posterPath, title, width, ...props }, ref) => {
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
        ref={ref}
      />
    );
  }
);

export default Poster;
