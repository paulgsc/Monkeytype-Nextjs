import { Textarea } from "@/components/ui/textarea"

const TextInput = () => {
  return (
    <form className="bg-background focus-within:ring-ring relative overflow-hidden rounded-lg border focus-within:ring-1">
      <Textarea
        id="message"
        placeholder="Type your message here..."
        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
      />
    </form>
  )
}

export default TextInput
