import { useState } from "react"

export const useCount = (initial = 1, max, min) => {

  const [count, setCount] = useState(initial)

  const sumar = () => {
    setCount(count + 1)
  }

  const restar = () => {
    setCount(count - 1)
  }
  const reset = () => {
    setCount(initial)
  }

  return { count, sumar, restar, reset }
}