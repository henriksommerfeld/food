import { z } from 'zod'
import { Theme } from './constants'

export const pictureSchema = z.object({
  sources: z.object({
    webp: z.string()
  }),
  img: z.object({
    src: z.string(),
    w: z.number(),
    h: z.number()
  })
})

export const urlSchema = z.string()

const assert = (images: Record<string, unknown>, path: string) => {
  if (images[path]) return

  const bestMatch = Object.entries(images)
    .map(([key]) => key)
    .find((key) => key.includes(path))
  bestMatch && console.log(`Found image with path '${bestMatch}'`)
  throw new Error(`Image not found: ${path}`)
}

export const getImage = (
  images: Record<string, unknown>,
  lqipImages: Record<string, unknown>,
  path: string
) => {
  assert(images, path)
  assert(lqipImages, path)
  const parsedImageData = pictureSchema.parse(images[path])
  const image = {
    srcset: parsedImageData.sources.webp,
    src: parsedImageData.img.src,
    w: parsedImageData.img.w,
    h: parsedImageData.img.h,
    lqip: urlSchema.parse(lqipImages[path])
  }
  return image
}

export type ImageType = ReturnType<typeof getImage>

export const getColor = (theme: Theme) => (theme === Theme.light ? 'black' : 'white')
