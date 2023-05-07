import React,{useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
    msg:message,
    type:type
   
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
}
  const togglemode=()=>{
    if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = "#042743";
    document.getElementById("mybox").style.border = "thin solid white";
    showAlert("Dark mode hasbeen enabled","success");
    document.title='TextUtils-Dark Mode';
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = "white";
    document.getElementById("mybox").style.border = "thin solid black";
    showAlert("Light mode has been enabled","Success");
    document.title='TextUtils-Light Mode';
    }
  }
  return (
    <>
        
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
    <Textform heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}></Textform>
    </div>
    </>
  );
}

export default App;