import { z } from "zod"

// This app will only ever run on local host, so no need for a db,
// We will always read an inmemory json data.

const titleSchema = z.string().min(3).max(16)

const channelNameSchema = z.enum(["NoPayWalls", "lazydev"])

const labelSchema = z.enum([
  "coding project",
  "leetcode",
  "video editing",
  "math",
  "rant",
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
