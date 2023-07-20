import logo from './logo.svg';
import './css/App.css';
import Navbar from './components/Navbar';
import SearchFilter from './components/SearchFilter';
import ResultComponent from './components/ResultComponent';

function App() {
  return (
    <>
      <div className="parent">
        <Navbar />
      </div>
      <SearchFilter />
      <ResultComponent/>
    </>
  );
}

export default App;
