import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist//js/bootstrap.bundle.js'
import { Route, Routes  } from 'react-router-dom';
import Home from './components/Sections/Home'



const App=()=> {


  return (
    
    <>

    {/* <Navbar/> */}
     <Routes>
      <Route exact path='/' element={<Home/>}/>
     </Routes>

    </>
  );
}
export default App;

