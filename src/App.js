import './App.css';
import {Routes,Route, useNavigate} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';
import Product from './Components/Product';
import Shirt from './Components/Shirt';
import Jeans from './Components/Jeans';
import Trouser from './Components/Trouser';
function App() {
  // const navigate=useNavigate();
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/About' element={<About/>}/>
    <Route exact path='/Services' element={<Services/>}/>
    <Route exact path='/Contact' element={<Contact/>}/>
    <Route exact path='/Product' element={<Product/>}>
    <Route index element={<Shirt/>}/>
    
      <Route path='Shirt' element={<Shirt/>}/>
     <Route path='Jeans' element={<Jeans/>}/>
      <Route path='Trouser' element={<Trouser/>}/>
    </Route>
    <Route exact path='*' element={<PageNotFound/>}/>
    {/* <Route exact path='/' element={<Home/>}/> */}
    </Routes>
    {/* <input type='button' value={"About"} onClick={()=>navigate('/About')}/>
    <input type='button' value={"Services"} onClick={()=>navigate('/Services')}/> */}
    </div>
  );
}

export default App;
