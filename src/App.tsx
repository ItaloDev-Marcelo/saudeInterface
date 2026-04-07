import LoginForm from './components/form/loginForm'
import CommunLayout from './components/layout/communLayout'
import './App.css'

function App() {
  return (
    <div className='w-screen bg-cover flex flex-col items-center justify-center h-screen bg-[url(assets/banner.jpg)] '>
        <CommunLayout style='w-[500px] h-[350px] p-2 flex flex-col text-white justify-center items-center'>
             <h1 className='text-2xl font-semibold mb-2'>Login</h1>
            <LoginForm/>
        </CommunLayout>
    </div>
  )
}

export default App
