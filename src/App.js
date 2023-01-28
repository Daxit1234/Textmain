import { useState } from 'react';
import Alert from './components/Alert';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [dark,setmode]=useState("light");
  const [alert,setalert]=useState(null)
  let showalert=(massage,type)=>{
      setalert({
        msg:massage,
        type:type
      });
      setTimeout(() => {
        setalert(null)
      }, 1000);
  }
  const toggleMode=()=>{
    if(dark==="light"){
      setmode("dark")
      document.body.style.backgroundColor="#042843";
      showalert("dark mode enable","success");
      document.title="Text Utiles - Dark";
    }
    else{
      setmode("light")
      document.body.style.backgroundColor="white";
      showalert("light mode enable","success");
      document.title="Text Utiles - Light";
    }
  }

  return (
    <div> 
      <Router>
      <Navbar title="Text Utiles" mode={dark} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element={  <About mode={dark}/>}/>
          <Route exact path="/"element={  <Textform showAlert={showalert} heading="Enter the Taxt to analyze below" mode={dark} />} />
      </Routes>
       </div>
      </Router>
      {/* <Navbar title="Text Utiles" mode={dark} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Textform showAlert={showalert} heading="Enter the Taxt to analyze below" mode={dark} /> 
      </div>  */}
    </div>
  );
}

export default App;
