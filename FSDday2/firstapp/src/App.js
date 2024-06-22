import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Register from './components/Register';
import { Route, Routes } from 'react-router-dom';
import StateBasics from './components/StateBasics';
import Counter from './components/Counter';
import Listmap from './components/Listmap';
import Apii from './components/Apii';
import Sample from './components/Sample';
import { Card } from '@mui/material';
import Cardget from './components/Cardget';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path='/' element={<Register/>}/>
         <Route path='/sin' element={<Signup/>}/>
         <Route path='/sb' element={<StateBasics/>}/>
         <Route path='/c' element={<Counter/>}/>
         <Route path='/l' element={<Listmap/>}/>
         <Route path='/a' element={<Apii/>}/>
         <Route path='/s' element={<Sample/>}/>
         <Route path='/ca' element={<Cardget/>}/>


      </Routes>
     
     
    </div>
  );
}

export default App;
