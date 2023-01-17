import './App.css';
import { PageHome } from './components/Pages/PageHome/PageHome';
import { Footer } from './components/Layouts/Footer/Footer'
import { Navbar } from './components/Layouts/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PageHome/>
      <Footer/>
    </div>
  );
}

export default App;
