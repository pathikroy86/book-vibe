
import './App.css'
import FormAction from './Components/FormAction/FormAction'
import Navbar from './Components/Navbar/Navbar'
import SimpleForm from './Components/React-from/SimpleForm'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className='flex justify-center text-center'>
        <SimpleForm></SimpleForm>
      </div>
      <div className='flex justify-center text-center mt-10'>
        <FormAction></FormAction>
      </div>
    </>
  )
}

export default App
