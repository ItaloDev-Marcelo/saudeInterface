import type {FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form"

export type InputProps<T extends FieldValues> = {
  register: UseFormRegister<T>,
  name: Path<T>,
  type: string,
  errors: FieldErrors<T>
  errorTxt: string,
  title: string
}