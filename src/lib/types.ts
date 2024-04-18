import { z } from 'zod'

export enum QuantityUnit {
  pieces = 'st',
  liter = 'l',
  deciliter = 'dl',
  centiliter = 'cl',
  milliliter = 'ml',
  tablespoon = 'msk',
  teaspoon = 'tsk',
  gram = 'g',
  hekto = 'hg',
  kilo = 'kg'
}

export interface Ingredient {
  name: string
  quantity: number
  unit: QuantityUnit
}

export type Quantity = Pick<Ingredient, 'quantity' | 'unit'>

export const Categories = [
  'Frukost',
  'Förrätt',
  'Huvudrätt',
  'Tillbehör',
  'Efterrätt',
  'Bakning'
] as const

export type Category = (typeof Categories)[number]

export interface Ingredients {
  ingredientsGroup: IngredientsGroup[]
}

export interface IngredientsGroup {
  name?: string
  ingredients: Ingredient[]
}

export interface Instructions {
  instructionsGroup: InstructionsGroup[]
}

export interface InstructionsGroup {
  name?: string
  instructions: string[]
}

export const recipeFrontmatterSchema = z.object({
  hidden: z.boolean(),
  url: z.string().nullish(),
  templateKey: z.literal('recept'),
  title: z.string(),
  description: z.string().nullish(),
  category: z.enum(Categories),
  tools: z.string().nullish(),
  featuredimage: z.string(),
  featuredimagetheme: z.literal(1).or(z.literal(2)),
  servings: z.number().min(1),
  servingslabel: z.string().default('portioner'),
  timepassive: z.object({
    dayspassive: z.number().min(0),
    hourspassive: z.number().min(0),
    minutespassive: z.number().min(0)
  }),
  timeactive: z.object({
    hoursactive: z.number().min(0),
    minutesactive: z.number().min(0)
  }),
  ingredients: z
    .array(
      z.object({
        partingredients: z.object({
          partingredientsname: z.string(),
          partingredientslist: z.array(
            z.object({
              ingredient: z.object({
                ingredientamount: z.number().min(0),
                unit: z.nativeEnum(QuantityUnit),
                ingredientname: z.string().min(1)
              })
            })
          )
        })
      })
    )
    .transform((data) => {
      const ingredients = { ingredientsGroup: new Array<IngredientsGroup>() }

      data.forEach((x) => {
        const ingredientList = new Array<Ingredient>()

        x.partingredients?.partingredientslist?.forEach((y) => {
          if (y.ingredient) {
            ingredientList.push({
              name: y.ingredient.ingredientname,
              quantity: y.ingredient.ingredientamount,
              unit: y.ingredient.unit
            })
          }
        })

        ingredients.ingredientsGroup.push({
          name: x?.partingredients?.partingredientsname,
          ingredients: ingredientList
        })
      })

      return ingredients
    }),
  instructions: z
    .array(
      z.object({
        partinstructions: z.object({
          partinstructionsname: z.string(),
          partinstructionslist: z.array(
            z.object({
              instruction: z.string()
            })
          )
        })
      })
    )
    .transform((data) => {
      const instructions: Instructions = { instructionsGroup: [] }

      data.forEach((x) => {
        const instructionsList = new Array<string>()

        x.partinstructions?.partinstructionslist?.forEach((y) => {
          instructionsList.push(y.instruction)
        })

        instructions.instructionsGroup.push({
          name: x?.partinstructions?.partinstructionsname,
          instructions: instructionsList
        })
      })

      return instructions
    }),
  tags: z
    .array(z.string())
    .nullish()
    .transform((x) => x ?? [])
})

export type RecipeFrontmatter = z.infer<typeof recipeFrontmatterSchema>
export type Recipe = { slug: string }
