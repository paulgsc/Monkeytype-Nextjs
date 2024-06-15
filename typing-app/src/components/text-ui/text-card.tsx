import type { FC } from "react"

import type { TextType } from "@/types/text"

type TextCardProps = {
  text?: TextType
}
const TextCard: FC<TextCardProps> = ({ text }) => {
  if (!text) return <></>
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">{text.title}</h3>
        <p className="text-muted-foreground text-sm">{text.content}</p>
      </div>
    </div>
  )
}

export default TextCard
