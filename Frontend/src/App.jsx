import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import Footer from './components/Footer';
function App() {

  return (
    <>
      <div className='font-sans'>
        <NavBar/>
        <ToastContainer/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App
