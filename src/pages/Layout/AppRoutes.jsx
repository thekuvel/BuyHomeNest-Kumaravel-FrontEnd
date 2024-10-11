import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoutes from '../../ProtectedRoutes'
import Properties from '../properties/Properties'
import Login from '../authentication/login/Login'
import Register from '../authentication/register/Register'
import PasswordReset from '../authentication/passwordReset/PasswordReset'
import SetPassword from '../authentication/passwordReset/setPassword'
import Home from '../Home/Home'
import Layout from './Layout'
import Agent from '../Agent/Agent'
import Post from '../Post/Post'
import MyPosts from '../MyPost/MyPost'
import EditPost from '../Post/EditPost'
import Admin from '../Admin/Admin'
import EmailForm from '../Email/Email'
import MyWishlist from '../MyWishlist/MyWishlist'


function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<ProtectedRoutes component={<Layout/>}/>}>
            <Route index element={<Home/>}/>
            <Route path='/agent' element={<Agent/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/editpost/:propertyId' element={<EditPost/>}/>
            <Route path='/myposts' element={<MyPosts/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/email' element={<EmailForm/>}/>
            <Route path='/mywishlist' element={<MyWishlist/>}/>
        </Route>
        {/* Public Routes */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/passwordreset' element={<PasswordReset/>}/>
        <Route path='/setpassword' element={<SetPassword/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default AppRoutes