import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div>
      <AddStudent/>
      <SearchStudent/>
      <Delete/>
      <ViewAll/>
    </div>

  );
}

export default App;
