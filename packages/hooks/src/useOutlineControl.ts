import { useEventListener } from "."

export function useOutlineControl() {
  useEventListener("keyup", (e: any) => {
    if (e.which === 9) {
      document.documentElement.classList.add("no-focus-outline")
    }
  })

  useEventListener("click", (e: any) => {
    if (e.which === 9) {
      document.documentElement.classList.remove("no-focus-outline")
    }
  })
}
