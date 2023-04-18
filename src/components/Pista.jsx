import Accordion from 'react-bootstrap/Accordion';
import '../css/pista.css';

function AllCollapseExample() {
  return (
    <Accordion id='estiloPista'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Aqui tienes una pista.</Accordion.Header>
        <Accordion.Body id="texto">
          <strong>Usuario:</strong> desafio.react@dltam.com
          <br/>
          <strong>Contraseña:</strong> myreactapp1
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;