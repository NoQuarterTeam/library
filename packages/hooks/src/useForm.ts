import { useReducer, Dispatch } from "react"

type AnyKey = { [key: string]: string }

type UpdateAction = {
  type: "update"
  field: AnyKey
}

type LoadingAction = {
  type: "loading"
}

type ValidationErrorAction = {
  type: "validationError"
  fieldErrors: AnyKey
}

type ErrorAction = {
  type: "error"
  error: string
}

type ResetAction = {
  type: "reset"
  values: AnyKey
}

type Action =
  | UpdateAction
  | LoadingAction
  | ValidationErrorAction
  | ErrorAction
  | ResetAction

const initialState = {
  dirty: false,
  loading: false,
  error: null,
  fieldErrors: {},
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
        fieldErrors: {},
        error: action.error,
      }
    case "reset":
      return {
        ...initialState,
        values: action.values,
      }
  }
}

export function useForm<T>(values: T): [FormState<T>, Dispatch<Action>] {
  return useReducer(formReducer, { ...initialState, values })
}
