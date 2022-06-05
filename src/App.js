import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router, Route, Link, Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark'); 
      document.body.style.backgroundColor = "#0d0d0d";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "Text Utils - Dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "Text Utils - Light mode";

    } 
  }

  return (
    <Router>
      
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>
          
          <Route exact path="/" element={<TextForm heading="Try Text Utils - Word counter, Charater counter, Remove extra spaces" mode={mode}/>}>
            
          </Route>
        </Routes>      
        </div>
    </Router>
  );
}

export default App;
