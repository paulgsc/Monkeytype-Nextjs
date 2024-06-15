"use client"

import { Icons } from "@/components/icons"

const HoldScreen = () => (
  <div>
    <Icons.cursorArrow />
    Click here or start typing to focus
  </div>
)

const TestText = () => {
  return (
    <div className="m-1 min-h-fit min-w-[80%] text-center">
      <p className="text-scoreColor m-1 text-left font-mono text-3xl">Timer</p>

      <div className="relative">
        <p className="text-softText relative text-left font-mono text-2xl tracking-wider">
          <span className="cursor-blink text-scoreColor animate-blink absolute -ml-2">
            |
          </span>
          Selected Test Text
        </p>

        <HoldScreen />

        <div className="mt-4">
          <input
            type="text"
            style={{ position: "absolute", top: "-9999px" }}
            readOnly
          />
        </div>
      </div>

      <div className="text-softText group relative mt-5 flex min-w-full cursor-pointer flex-col items-center">
        <Icons.refresh className="hover:text-lightText text-2xl group-hover:flex" />
        <p className="text-lightText absolute top-7 m-5 hidden rounded bg-black px-3 py-1 text-xl group-hover:flex">
          Restart test
        </p>
      </div>
    </div>
  )
}

export default TestText
