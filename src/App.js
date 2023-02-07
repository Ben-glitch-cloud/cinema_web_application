import './App.scss';
import Home from './Home';
import About from './About';  
import Location from './Location.js';
import Find from './Find';
import Contact from './Contact';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route exact path="/" element={<Home/>}></Route> 
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/find' element={<Find/>}></Route>
      <Route exact path='/location' element={<Location/>}></Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
