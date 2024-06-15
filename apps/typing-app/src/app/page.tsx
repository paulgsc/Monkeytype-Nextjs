import TextInput from "@/components/input"
import WithTextCard from "@/components/text-ui"

const Home = () => {
  return (
    <figure className=" w-full max-2xl:flex max-2xl:flex-col max-2xl:items-center max-2xl:justify-center 2xl:absolute 2xl:bottom-12 2xl:start-[18%] 2xl:max-w-screen-xl ">
      <WithTextCard />
      <TextInput />
    </figure>
  )
}

export default Home
