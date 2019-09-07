import { useReducer, Dispatch } from "react"

type AnyKey = { [key: string]: any }

export type UpdateAction = {
  type: "update"
  field: AnyKey
}

export type LoadingAction = {
  type: "loading"
}

export type ValidationErrorAction = {
  type: "validationError"
  fieldErrors: { [key: string]: string[] }
}

export type ErrorAction = {
  type: "error"
  error: string
}

export type ResetAction = {
  type: "reset"
  values?: AnyKey
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

export interface FormState<T> {
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
        values: action.values || state.values,
      }
  }
}

export function useForm<T>(values: T): [FormState<T>, Dispatch<FormAction>] {
  return useReducer(formReducer, { ...initialState, values })
}
