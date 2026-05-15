import type { RegisterFormType } from "../../types/RegisterFormType"
import axios from 'axios'
import Input from "./common/input"
import { registerFormData } from './data/registerData'
import { useForm, type SubmitHandler } from "react-hook-form"
import SubmitBtn from '../form/common/SubmitBtn'

type ResgisterPropsType = {
  hundleNextForm : (next:boolean) => void
}

const RegisterForm = ({hundleNextForm}:ResgisterPropsType) => {

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormType>()
  
  const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
        const {username,email,password} = data;
        sendData(username,email,password)
  }


  const sendData = async (username:string,email:string,password:string) => {
        try {
          const result =  await axios.post('https://api-brasilsaude.onrender.com/api/auth/register', {
          name: username,
          email,
          password
        })
        console.log(result.data)
        const {success} = result.data
        hundleNextForm(success)
        }catch(error) {
          console.log(error)
        }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       {registerFormData.map(item => (
        <Input type={item.type} errors={errors}
          title={item.title} name={item.name} style='w-100'
          errorTxt={item.errorTxt} register={register} />
      ))
      }
      <SubmitBtn />
    </form>
  )
}

export default RegisterForm