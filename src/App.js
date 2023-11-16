import {Route, Routes} from 'react-router-dom';
import Collections from './collections/Collections';
import BottomNav from './bottomNav/BottomNav';
import About from './about/About';
import Contact from './contact/Contact';
import Login from './login/Login';
import Cart from './cart/Cart';
import SignUp from './signup/SignUp';
import ItemOne from './productList/ItemOne';
import Nav from './nav/Nav';




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
      <Route path="/cart/:productId" element={<Cart />} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/itemone' element={<ItemOne />}/>
    </Routes>
    </>
  );
}

export default App;
