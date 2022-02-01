import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Components
import Nav from './components/Nav/Nav';
import Scan from './components/Scan/Scan';
import Saved from './components/Saved/Saved';
import Create from './components/Create/Create';
// Styles
import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate to='/create' />} />
          <Route path='/scan' element={<Scan />} />
          <Route path='/create' element={<Create />} />
          <Route path='/saved' element={<Saved />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
