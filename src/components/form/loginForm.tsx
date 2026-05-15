import type { LoginFormType } from "../../types/LoginFormType"
import Input from "./common/input"
import axios from 'axios';
import {loginFormData} from './data/loginData'
import { useForm, type SubmitHandler } from "react-hook-form"

type loginFormProp = {
  hundlePopUp : (next:boolean) => void
}

const LoginForm = ({hundlePopUp}:loginFormProp) => {

  const {register,handleSubmit, formState: {errors}} = useForm<LoginFormType>();

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    const {email,password} = data;
    sendData(email,password)
  }
  
    const sendData = async (email:string,password:string) => {
          try {
            const result =  await axios.post('https://api-brasilsaude.onrender.com/api/auth/login', {
            email,
            password
          })
          console.log(result.data)
          hundlePopUp(result.data.success)
          }catch(error) {
            console.log(error)
          }
    }
 

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       { loginFormData.map(item => (
        <Input type={item.type} errors={errors} 
        title={item.title} name={item.name} style='w-75'
        errorTxt={item.errorTxt} register={register} />
        ))
       }
        <button type='submit' className="bg-blue-400 w-75 h-9 rounded-sm text-white font-bold">Entrar</button>
    </form>
  )
}

export default LoginForm