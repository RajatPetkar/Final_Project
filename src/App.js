import './App.css';
import Navbar from './components/nav/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist//js/bootstrap.bundle.js'
import { Route, Routes  } from 'react-router-dom';
import Home from './components/Sections/Home'
import About from './components/Sections/About'
import Contact from './components/Sections/Contact'
import Login from './components/Sections/Login'
import Register from './components/Sections/Register'
// import Blogs from './components/Sections/Blogs';



const App=()=> {


  return (
    
    <>

    <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      {/* <Route exact path='/blogs' element={<Blogs/>}/> */}
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
     </Routes>

    </>
  );
}
export default App;

