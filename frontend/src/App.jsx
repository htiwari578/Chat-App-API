
import './App.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/signup';
import Login from './components/Login';



const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/register',
    element:<Signup />
  },
  {
    path:'/login',
    element:<Login />
  }
])

function App() {

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider  router ={ router}/>

    </div>
   
  )



  
}

export default App
