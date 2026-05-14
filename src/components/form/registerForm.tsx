import type { RegisterFormType } from "../../types/RegisterFormType"
import Input from "./common/input"
import { registerFormData } from './data/registerData'
import { useForm, type SubmitHandler } from "react-hook-form"


const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>()
  const onSubmit: SubmitHandler<RegisterFormType> = (data) => console.log(data)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {registerFormData.map(item => (
        <Input type={item.type} errors={errors}
          title={item.title} name={item.name} style='w-100'
          errorTxt={item.errorTxt} register={register} />
      ))
      }
      <button type='submit' className="bg-blue-400 mt-4 w-[400px] h-12 rounded-sm text-white font-bold">Enviar</button>
    </form>
  )
}

export default RegisterForm