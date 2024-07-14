import './App.css';


import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

import Marcos from './assets/img/marcos-bizzarri.png';

function App() {
  return (
    <div className='geral'>
    <Navbar />
  
          <img src={Marcos} alt="Marcos Bizzarri" className='imagem_perfil'/>
        
    <Home />
    </div>
  );
}

export default App;
