import type {FieldErrors, FieldValues } from "react-hook-form"

export type errorSmsProps<T extends FieldValues> = {
  errors: FieldErrors<T>,
  errorTxt: string,
  name: string
}
