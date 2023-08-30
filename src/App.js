
import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search' element={<h1>search page</h1>}>
          </Route>
          <Route path='/' element={<Home/>}>
          </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
