import { useReducer, Dispatch } from "react"

type ActionType = "update" | "loading" | "validationError" | "error" | "reset"

type Action = {
  type: ActionType
  values?: any
  field?: { [key: string]: any }
  error?: string
  fieldErrors?: { [key: string]: any }
}

const initialState = {
  dirty: false,
  loading: false,
  error: null,
  fieldErrors: null,
}

interface FormState<T> {
  values: T
  loading: boolean
  error: string
  dirty: boolean
  fieldErrors: { [key: string]: any }
}

function formReducer(state: any, action: Action) {
  switch (action.type) {
    case "update":
      return {
        ...state,
        dirty: true,
        values: { ...state.values, ...action.field },
      }
    case "loading":
      return { ...state, loading: true }
    case "validationError":
      return {
        ...state,
        loading: false,
        error: null,
        fieldErrors: action.fieldErrors,
      }
    case "error":
      return {
        ...state,
        loading: false,
        fieldErrors: null,
        error: action.error,
      }
    case "reset":
      return {
        ...initialState,
        values: action.values,
      }
    default:
      throw new Error("incorrect type used: " + action.type)
  }
}

export function useForm<T>(values: T): [FormState<T>, Dispatch<Action>] {
  return useReducer(formReducer, { ...initialState, values })
}
