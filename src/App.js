import './App.css';
import Home from './components/home'
import Student from './components/student'
import Contact from './components/contact'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './styles/style.css'
function App() {
  return (<Router>
    <div className="App">
      
      <nav className='navBar'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/student'className='link'>Student</Link>
        <Link to='/contact'className='link'>Contact</Link>
      </nav>
    </div>
    <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/student' element={<Student />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
  </Router>

  );
}

export default App;
