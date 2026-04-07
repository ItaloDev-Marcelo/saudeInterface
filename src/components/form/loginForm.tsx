import Input from "./utils/input"
import {loginFormData} from './data/loginData'
import { useForm, type SubmitHandler } from "react-hook-form"


type UseFormType = {
  name: string,
  password: string
}

const LoginForm = () => {

  const {register,handleSubmit, formState: {errors}} = useForm<UseFormType>()

  const onSubmit: SubmitHandler<UseFormType> = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Input type={loginFormData[0].type} errors={errors} 
        title={loginFormData[0].title} name='name'
        errorTxt={loginFormData[0].errorTxt} register={register} />
        <Input type={loginFormData[1].type} errors={errors} 
        title={loginFormData[1].title} name='password'
        errorTxt={loginFormData[1].errorTxt} register={register} />
        <button type='submit' className="bg-blue-400 w-[300px] h-9 rounded-sm text-white font-bold">Login</button>
    </form>
  )
}

export default LoginForm