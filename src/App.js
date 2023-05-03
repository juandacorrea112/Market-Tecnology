import './App.css';
import { PageHome } from './components/Pages/PageHome/PageHome';
import { Footer } from './components/Layouts/Footer/Footer'
import { Navbar } from './components/Layouts/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

//===== VISTAS =====//
import { PageLogin } from './components/Pages/PageLogin/PageLogin';
import { PageRegister } from './components/Pages/PageRegister/PageRegister';
import { PageProfile } from './components/Pages/PageProfile/PageProfile';
import { PageSettings } from './components/Pages/PageSettings/PageSettings';

function App() {
  return (
    <div className="App">
      <Navbar/>

      {/* ============ RUTAS ============ */}
      <Routes>
        <Route path='/' element={<PageHome/>}/>
        <Route path='/Login' element={<PageLogin/>}/>
        <Route path='/Registro' element={<PageRegister/>}/>
        <Route path='/Perfil' element={<PageProfile/>}/>
        <Route path='/Settings' element={<PageSettings/>}/>
      </Routes>
      {/* =============================== */}
      <Footer/>
    </div>
  );
}

export default App;
