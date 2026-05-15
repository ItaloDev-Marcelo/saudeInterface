import type { LoginFormType } from "../../../types/LoginFormType"


export type loginData = {
        type: string,
        errorTxt: string,
        title: string,
        name: keyof LoginFormType
}


export  const loginFormData:loginData[] = [
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


