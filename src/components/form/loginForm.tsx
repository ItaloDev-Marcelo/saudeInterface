import type { LoginFormType } from "../../types/LoginFormType"
import Input from "./common/input"
import {loginFormData} from './data/loginData'
import { useForm, type SubmitHandler } from "react-hook-form"



const LoginForm = () => {

  const {register,handleSubmit, formState: {errors}} = useForm<LoginFormType>()

  const onSubmit: SubmitHandler<LoginFormType> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       { loginFormData.map(item => (
        <Input type={item.type} errors={errors} 
        title={item.title} name={item.name} style='w-75'
        errorTxt={item.errorTxt} register={register} />
        ))
       }
        <button type='submit' className="bg-blue-400 w-[300px] h-9 rounded-sm text-white font-bold">Entrar</button>
    </form>
  )
}

export default LoginForm