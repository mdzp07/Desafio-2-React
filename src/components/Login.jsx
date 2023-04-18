import { useState } from "react";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllCollapseExample from './Pista';
import '../css/login.css';




function Login({ setResult }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validadorInput = (e) => {

        e.preventDefault();

        if (email === '' || password === '') {
            setResult({ validate: true, text: 'Existen campos vacíos, verifique nuevamente', variantAnswer: 'warning' });
            return;
        } else if (email.trim() === 'desafio.react@dltam.com' && password.trim() === 'myreactapp1') {
            setResult({ validate: true, text: 'Usuario y contraseña ingresados correctamente.', variantAnswer: 'success' });
            return;
        } else {
            setResult({ validate: true, text: 'El Usuario y/o contraseña ingresados son incorrectos', variantAnswer: 'danger' });
            return;
        }
    };

    return (
        <div className="format-form">
            <Form onSubmit={validadorInput}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control id="inputEmail" type="email" placeholder="Ingrese su correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control id="inputPassword" type="password" placeholder="Ingrese su contraseña" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <AllCollapseExample />
                <br />
                <Button disabled={!password || !email} id="boton" variant="primary" type="submit">
                    Iniciar sesion
                </Button>
            </Form>
        </div>
    );
}

export default Login;