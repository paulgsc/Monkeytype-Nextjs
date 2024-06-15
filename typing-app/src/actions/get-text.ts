import { promises as fs } from "fs"
import path from "path"
import { z } from "zod"

import { textSchema } from "@/types/text"
import { siteConfig } from "@/config/site"

export async function getText() {
  const data = await fs.readFile(
    path.join(process.cwd(), siteConfig.textJsonPath)
  )

  const texts = JSON.parse(data.toString())

  return z.array(textSchema).parse(texts)
}
