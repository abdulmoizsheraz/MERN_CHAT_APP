import React,{lazy} from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom"
import ProtectedRoute from './components/auth/ProtectedRoute';
// Components Imports
const Home = lazy(()=>import("./pages/Home"));
const Login = lazy(()=>import("./pages/Login"));
const Chat = lazy(()=>import("./pages/Chat"));
const Groups = lazy(()=>import("./pages/Groups"));
const NotFound = lazy(()=>import("./pages/NotFound"));
let user=true;
const App = () => {
  return (
    <BrowserRouter>
<Routes>
<Route path="/" element={<ProtectedRoute user={user}><Home/></ProtectedRoute>}/>
<Route path="/login" element={<ProtectedRoute redirect='/' user={!user}><Home/></ProtectedRoute>}/>
<Route path="/chat:/chatId" element={<Chat/>}/>
<Route path="/groups" element={<Groups/>}/>
<Route path="about" element={<h1>This is About Path</h1>}/>
<Route path="*" element={<NotFound/>}/>
</Routes>
    </BrowserRouter>
  )
}

export default App