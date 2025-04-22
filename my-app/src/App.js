
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert(
      {msg:message,
        type:type}
    )
    setTimeout(()=>{
       setAlert(null);},3000
    );
    
  }
  
  const toggleTheme=()=>{
    if(mode==='light')
    {
      setMode('dark');
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
      showAlert("Light mode has been enabled","success")
    }
    }
  
  return (
    <>
      <BrowserRouter>
     <div className="container">
     <Navbar title="TextUtil" mode={mode} toggleTheme={toggleTheme}
     />
     <Routes>
      <Route path="/" element={
        <>
        <Alert alert={alert}/>
        <Textform heading="Enter the text to analyze" showAlert={showAlert}/>
        </>}></Route>
      <Route path="/about" element={<About/>}></Route>
     </Routes>
    </div>
    </BrowserRouter>
    </>
    
  );
}

export default App;
