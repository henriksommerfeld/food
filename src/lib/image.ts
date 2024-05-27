import { z } from 'zod'

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
