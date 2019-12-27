import { FluidObject } from 'gatsby-image';
import { RecipeImage } from 'components/LazyImage';

export function getFluid(image: any): FluidObject | null {
  return image?.childImageSharp?.fluid || null;
}

export function getResized(image: any): string | null {
  return image?.childImageSharp?.resize?.src || null;
}

export function isImageUrl(image: any): boolean {
  return typeof image === 'string' && image.length > 0;
}

export function isPortrait(image: any): boolean {
  const aspectRatio = image?.childImageSharp?.fluid?.aspectRatio;
  return aspectRatio && aspectRatio < 1;
}

export interface OriginalImage {
  src: string;
  width: number;
  height: number;
  name: string;
}

export function getImageNameFromUrl(url: string): string {
  if (!url) return url;

  const fileParts = new URL(url).pathname.split('/').filter(x => x);
  const filename = fileParts[fileParts.length - 1];

  return filename;
}

export function getOriginalImage(image: any): OriginalImage {
  const src = image?.childImageSharp?.original?.src || '';
  const width = image?.childImageSharp?.original?.width || '';
  const height = image?.childImageSharp?.original?.height || '';
  const name = image?.childImageSharp?.fluid.originalName || '';

  return { src, width, height, name };
}
