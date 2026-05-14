import type { RegisterFormType } from "../../../types/RegisterFormType"

type registerData= {
        type: string,
        errorTxt:string,
        title: string,
        name: keyof RegisterFormType
}


export const registerFormData:registerData[] = [
    {
        type: 'text',
        errorTxt: 'this field is required',
        title: 'Username',
        name: 'username' 
    },
    {
        type: 'text',
        errorTxt: 'this field is required',
        title: 'Email',
        name: 'email' 
    },
    {
        type: 'password',
        errorTxt: 'this field is required',
        title: 'Senha',
        name: 'password' 
    }
]
