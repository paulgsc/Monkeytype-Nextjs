import type { FC } from "react"
import Image from "next/image"

import type { TextType } from "@/types/text"

type TextCardProps = {
  text?: TextType
}
const TextCard: FC<TextCardProps> = ({ text }) => {
  if (!text) return <></>
  return (
    <div className="relative overflow-hidden rounded-xl border shadow-sm max-2xl:w-4/5">
      <Image
        className=" aspect-[13/6] w-full rounded-xl object-cover blur-sm saturate-50 2xl:aspect-[10/6] "
        height={300}
        width={768}
        sizes="(min-width: 1540px) 569px, (min-width: 940px) calc(6.03vw + 640px), calc(83.71vw - 84px)"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        alt="Image Description"
      />
      <div className="bg-card outline-accent absolute inset-3 rounded-lg shadow-inner outline">
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">{text.title}</h3>
          <p className="mt-1 text-gray-800">{text.content}</p>
        </div>
      </div>
    </div>
  )
}

export default TextCard
