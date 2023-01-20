import './App.css';
import { PageHome } from './components/Pages/PageHome/PageHome';
import { Footer } from './components/Layouts/Footer/Footer'
import { Navbar } from './components/Layouts/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { PageLogin } from './components/Pages/PageLogin/PageLogin';


function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* ============ RUTAS ============ */}
      <Routes>
        <Route path='/' element={<PageHome/>}/>
        <Route path='/Login' element={<PageLogin/>}/>
      </Routes>
      {/* =============================== */}
      <Footer/>
    </div>
  );
}

export default App;
