import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddStudent />} />
        <Route path='/Search' element={<SearchStudent />} />
        <Route path='/Delete' element={<Delete />} />
        <Route path='/ViewAll' element={<ViewAll />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
