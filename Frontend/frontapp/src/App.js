
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Data from './components/Data';
import Viewdata from './components/Viewdata';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Data />} />
          <Route path="v" element={<Viewdata />} />
        </Routes>
      
    </div>
  );
}

export default App;
