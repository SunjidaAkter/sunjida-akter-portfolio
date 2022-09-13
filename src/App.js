import logo from './logo.svg';
import './App.css';
import Nav from './Component/Shared/Nav';
import Home from './Component/Home/Home';
import Footer from './Component/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './Component/Home/ProjectDetail';

function App() {
  return (
    <div className="App">

      {/* <Home></Home> */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/all/:id' element={<ProjectDetail></ProjectDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
