import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import Card from './componentes/Card';
import Texto from './componentes/Texto';
import Footer from './componentes/Footer';
import Acordeon from './componentes/Acordeon';



function App() {
  return (
    <div className="App">
     
     <Navbar/>
     
     <Texto/>
     <Acordeon/>
     <Card/>


     <footer>
     <Footer/>

     </footer>

    </div>
  );
}

export default App;
