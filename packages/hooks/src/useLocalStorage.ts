import { useState } from "react"
const isBrowser = typeof window !== "undefined"

export function useLocalStorage<T>(
  key: string,
  initialValue?: T,
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = isBrowser && window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      isBrowser &&
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {}
  }

  return [storedValue, setValue]
}
