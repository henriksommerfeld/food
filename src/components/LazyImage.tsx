import React from 'react';
import Image, { GatsbyImageProps } from 'gatsby-image';
import { isImageUrl, getFluid } from '../images';

export interface FancyImage {
  childImageSharp: GatsbyImageProps;
}

export type RecipeImage = FancyImage | string;

export interface LazyImageProps {
  image: RecipeImage;
  style?: any;
  imgStyle?: any;
  altText?: string;
  aspectRatio?: number;
}

export default function LazyImage({
  image,
  style = null,
  imgStyle = null,
  altText = '',
  aspectRatio = null,
}: LazyImageProps) {
  if (isImageUrl(image)) {
    const imageUrl = (image as unknown) as string;
    return <img src={imageUrl} alt={altText} style={style} />;
  }

  const fluidImage = getFluid(image);
  if (fluidImage) {
    const fluidObject = aspectRatio
      ? { ...fluidImage, aspectRatio }
      : fluidImage;
    return (
      <Image
        fluid={fluidObject}
        alt={altText}
        style={style}
        imgStyle={imgStyle}
      />
    );
  }

  return null;
}
