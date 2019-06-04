import { useEffect } from "react"

export function useEventListener(
  key: string,
  cb: (e: any) => void,
  options?: any,
) {
  useEffect(() => {
    window.addEventListener(key, cb, options)
    return () => window.removeEventListener(key, cb, options)
  }, [cb, key, options])
}
