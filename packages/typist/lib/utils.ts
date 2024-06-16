export function isString(subject: unknown): subject is string {
  return typeof subject === "string"
}
