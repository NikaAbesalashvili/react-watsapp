import React, { useRef } from 'react';
import { v4 as uuidV4 } from 'uuid';

import {
    Container,
    Form,
    Button
} from 'react-bootstrap';

const Login = ({ onIdSubmit }) => {

    const idRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        onIdSubmit(idRef.current.value);
    };

    const createId = () => {
        onIdSubmit(uuidV4());
    };

    return (
        <Container className='align-items-center d-flex' style={{ height: '100vh' }} >
            <Form className='w-100' onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>
                        Enter your ID
                    </Form.Label>
                    <Form.Control type='text' ref={idRef} required ></Form.Control>
                </Form.Group>
                <Button type='submit' className='m-2' >Log In</Button>
                <Button variant='secondary' onClick={createId} >Create ID</Button>
            </Form>
        </Container>
    );
};

export default Login;
