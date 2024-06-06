import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './estilos.css';

function BasicExample() {
  return (
    <>
    <div className='divfondo'>
    <Form>
        <div className='divform'>
            
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type="text" placeholder="¿A nombre de quien se reservara la habitacion?" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Cantidad de huespedes:</Form.Label>
        <Form.Control type="number" placeholder="¿Cuantos huespedes se quedaran en la habitacion?" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Tipo de habitacion:</Form.Label>
        <Form.Control type="number" placeholder="¿Que tipo de habitacion desea?"/>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Numero de piso</Form.Label>
        <Form.Control type="number" placeholder="Escriba que numero de piso que desea"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Dia de entrada:</Form.Label>
        <Form.Control type="text" placeholder="Escriba el dia que empeiza su reservacion"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Dia de salida:</Form.Label>
        <Form.Control type="text" placeholder="Escriba el dia que termina su reservacion"/>
      </Form.Group>
      
<center>
      <Button variant="outline-primary" size='lg'>Reservar habitacion</Button>{' '}
      </center>
      </div>
    </Form>
    </div>

    <div className='divbienv'>
      <h1 className='h1bienv'>¡Bienvenidos a hotel 19 budos!</h1>
    </div>
    </>
  );
}

export default BasicExample;