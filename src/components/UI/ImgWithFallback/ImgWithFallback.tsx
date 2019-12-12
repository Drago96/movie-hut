import React, { ImgHTMLAttributes, useState, useEffect } from 'react';

type OwnProps = {
  fallbackUrl: string;
};

type Props = OwnProps & ImgHTMLAttributes<any>;

const ImgWithFallback: React.FC<Props> = ({
  fallbackUrl,
  alt,
  src,
  ...props
}) => {
  const [imageSource, setImageSource] = useState(src);
  useEffect(() => {
    setImageSource(src);
  }, [src]);

  const handleImageError = () => {
    setImageSource(fallbackUrl);
  };

  return (
    <img {...props} src={imageSource} alt={alt} onError={handleImageError} />
  );
};

export default ImgWithFallback;
