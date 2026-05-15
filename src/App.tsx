import CommunLayout from './components/layout/communLayout'
import LoginForm from './components/form/loginForm'
import './App.css'
import RegisterForm from './components/form/registerForm'
import { useState } from 'react'
import banner from './assets/banner.jpg'
function App() {
  const [nextForm, setNextForm] = useState(true);
  const [popUp, setPopUp] = useState(false)
  const hundleNextForm = (nextValue: boolean) => setNextForm(nextValue)
  const hundlePopUp = (nextValue: boolean) => setPopUp(nextValue)
  return (
    <div 
     style={{
    backgroundImage: `url(${banner})`
  }}
    className='w-screen bg-cover flex flex-col items-center justify-center h-screen '>

     {
      !nextForm ? <CommunLayout style='w-[500px] h-[500px] p-2 flex flex-col text-white justify-center items-center'>
             <h1 className='text-2xl font-semibold mb-2'>Registro de usúario</h1>
            <RegisterForm hundleNextForm={hundleNextForm} />
        </CommunLayout> : null
     }

     {
      popUp && <div className='w-60 text-center p-5 my-4 bg-orange-400 font-bold'>Seja bem-vindo ao sistema</div>
     }

       {
        nextForm && popUp === false ? <CommunLayout style='w-[500px] h-[350px] p-2 flex flex-col text-white justify-center items-center'>
             <h1 className='text-2xl font-semibold mb-1'>Login</h1>
            <LoginForm hundlePopUp={hundlePopUp}/>
        </CommunLayout> : null
       }
        
    </div>
  )
}

export default App
