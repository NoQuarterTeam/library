import { useState } from "react"

interface ContainerProps {
  initialState: any
  children: any
}

function Container({ initialState, children }: ContainerProps) {
  const state = useState(initialState)
  return children(state)
}

export default Container
