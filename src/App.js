import {Route, Routes} from 'react-router-dom'
import { Nav } from './nav/Nav';
import Collections from './collections/Collections';
import BottomNav from './bottomNav/BottomNav';
import About from './about/About';
import Contact from './contact/Contact';
import Login from './login/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/' element={<Collections/>}/>
      <Route path='/bottomnav' element={<BottomNav/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;
