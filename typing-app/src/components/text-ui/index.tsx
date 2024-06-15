import { getText } from "@/actions"

import TextCard from "./text-card"

const WithTextCard = async () => {
  const text = (await getText()).at(0)
  return <TextCard text={text} />
}

export default WithTextCard
