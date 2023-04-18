import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import { useState } from "react";
import Alerta from './components/Alerta';


function App() {
  const [result, setResult] = useState({validate: true, text: '', variantAnswer: ''});
  return (
    <>
      <Login setResult={setResult}/>
      <Alerta result={result}/> 
    </>
  );
}

export default App;
