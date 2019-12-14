import React, {
  ImgHTMLAttributes,
  useState,
  useEffect,
  forwardRef
} from 'react';

type OwnProps = {
  fallbackUrl: string;
};

type Props = OwnProps & ImgHTMLAttributes<any>;

const ImgWithFallback = forwardRef<HTMLImageElement, Props>(
  ({ fallbackUrl, alt, src, ...props }, ref) => {
    const [imageSource, setImageSource] = useState(src);
    useEffect(() => {
      setImageSource(src);
    }, [src]);

    const handleImageError = () => {
      setImageSource(fallbackUrl);
    };

    return (
      <img
        {...props}
        src={imageSource}
        alt={alt}
        onError={handleImageError}
        ref={ref}
      />
    );
  }
);

export default ImgWithFallback;
