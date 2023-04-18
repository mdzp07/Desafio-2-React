import Alert from "react-bootstrap/Alert";
import '../css/alerta.css'

const Alerta = ({ result }) => {
    return (
      <Alert id='format-alert' className="text-center" variant={result.variantAnswer} show={result.validate}>
        {result.text}
      </Alert>
    );
  };
  
  export default Alerta;

