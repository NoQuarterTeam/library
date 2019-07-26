import { useReducer, Dispatch } from "react"

type AnyKey = { [key: string]: any }

type UpdateAction = {
  type: "update"
  field: AnyKey
}

type LoadingAction = {
  type: "loading"
}

type ValidationErrorAction = {
  type: "validationError"
  fieldErrors: { [key: string]: string[] }
}

type ErrorAction = {
  type: "error"
  error: string
}

type ResetAction = {
  type: "reset"
  values: AnyKey
}

export type FormAction =
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

function formReducer(state: any, action: FormAction) {
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

export function useForm<T>(values: T): [FormState<T>, Dispatch<FormAction>] {
  return useReducer(formReducer, { ...initialState, values })
}
