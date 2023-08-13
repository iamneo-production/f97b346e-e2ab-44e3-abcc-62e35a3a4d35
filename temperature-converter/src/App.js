import Home from './Pages/Home'
import Conversioninfo from './Components/Conversioninfo'
import {Route, Routes} from 'react-router-dom'
import FtoC from './Components/FtoC'
import CtoF from './Components/CtoF'
import Convertbatch from './Components/Convertbatch'
import './App.css'

function App() {
  return (
    <div className='main_wrapper'>
      <div className="container">
       <div className='row'>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/api/conversion-info" element={ <Conversioninfo/> } />
        <Route path="/api/fahrenheit-to-celsius" element={ <FtoC/> } />
        <Route path="/api/celsius-to-fahrenheit" element={ <CtoF/> } />
        <Route path="/api/convert-batch" element={ <Convertbatch/> } />
      </Routes>
      
       </div>
    </div>
    </div>
  );
}

export default App;
