

type btnProps = {size: string}
const SubmitBtn = ({size}:btnProps ) => {
  return (
    <button type='submit' className={`bg-blue-400 hover:bg-blue-600 cursor-pointer ${size} h-9 rounded-
      sm text-white font-bold`}>Entrar</button>
  )
}

export default SubmitBtn