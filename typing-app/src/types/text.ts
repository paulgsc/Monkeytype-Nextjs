import { z } from "zod"

// This app will only ever run on local host, so no need for a db,
// We will always read an inmemory json data.

const titleSchema = z.string().min(3).max(16)

const channelNameSchema = z.enum(["variant1", "variant2"])

const labelSchema = z.enum([
  "value1",
  "value2",
  "value3",
  "value4",
  "value5",
  "value6",
])

const contentSchema = z.string()

export const textSchema = z.object({
  id: z.string(),
  title: titleSchema,
  channelName: channelNameSchema,
  label: labelSchema,
  content: contentSchema,
})

export type TextType = z.infer<typeof textSchema>
