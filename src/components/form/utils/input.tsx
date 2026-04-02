import type {FieldValues} from "react-hook-form"
import ErrorSms from './errorSms'
import type { InputProps } from "../../../type/InputProps"

const input =  <T extends FieldValues> ({register,name,type,errorTxt,title, errors}:InputProps<T>) => {
  return (
    <>
      <label>
          <span>{title}</span>
          <input type={type} className={errors[name] && 'border-red-600'} {...register(name)} />
          <ErrorSms errors={errors} name={name} errorTxt={errorTxt} />
      </label>
    </>
  )
}

export default input