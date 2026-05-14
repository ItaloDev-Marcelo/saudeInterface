import { type FieldValues } from "react-hook-form"
import ErrorSms from './errorSms'
import type { InputProps } from "../../../types/InputProps"

function Input<T extends FieldValues>({
  register,
  name,
  type,
  errorTxt,
  title,
  errors,
  style
}: InputProps<T>) {
  return (
    <label className='flex flex-col my-4'>
      <span className="font-semibold text-[0.9rem] mb-2">{title}:</span>
      <div className="">
        <input
          type={type}
          className={`border ${errors[name] && 'border-red-600 '} ${style}   border-gray-200 rounded-sm w-75 h-9`}
          {...register(name, {required: true})}
        />
        <ErrorSms errors={errors} name={name} errorTxt={errorTxt} />
      </div>
    </label>
  )
}

export default Input