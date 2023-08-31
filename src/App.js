
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search' element={<SearchPage/>}>
          </Route>
          <Route path='/' element={<Home/>}>
          </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
