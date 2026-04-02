import type {FieldValues } from "react-hook-form"
import type { errorSmsProps } from "../../../type/ErrorSmsProps"

const ErrorSms =  <T extends FieldValues> ({errors, name, errorTxt}:errorSmsProps<T>) => {
  return (
    <p>{errors[name]  && <span>{errorTxt}</span>}</p>
  )
}

export default ErrorSms