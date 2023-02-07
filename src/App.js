import './App.scss';
import Home from './Home';
import Contact from './Contact';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/Contact" element={<Contact/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
