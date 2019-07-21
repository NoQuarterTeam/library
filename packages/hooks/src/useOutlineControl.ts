import { useEventListener } from "."

export function useOutlineControl() {
  useEventListener("keyup", (e: any) => {
    if (e.which === 9) {
      document.documentElement.classList.add("focus-outline")
    }
  })

  useEventListener("mousedown", () => {
    document.documentElement.classList.remove("focus-outline")
  })
}
