import type {FieldValues } from "react-hook-form"
import type { errorSmsProps } from "../../../type/ErrorSmsProps"

const ErrorSms = 
 <T extends FieldValues> 
 ({errors, name, errorTxt}:errorSmsProps<T>) => {
  return (
    <p>{errors[name]  && <span className="font-medium  text-red-500">{errorTxt}</span>}</p>
  )
}

export default ErrorSms