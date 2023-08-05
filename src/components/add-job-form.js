import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import AddSuccess from './success';


function AddJob({ submitJob }){

    const [jobNumber, setJobNumber] = useState('');
    const [screens, setScreens] = useState('');
    const [firmDate, setFirmDate] = useState('No');
    const [dueDate, setDueDate] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [description, setDescription] = useState('');

    const addToSchedule = (event) => {
        event.preventDefault();

        console.log("button was clicked");

        <AddSuccess/>

        const newJobData = {

            jobNumber: jobNumber,
            screens: screens,
            firmDate: firmDate,
            dueDate: dueDate,
            customerName: customerName,
            description: description
        }
        submitJob(newJobData)

        setJobNumber('');
        setScreens('');
        setFirmDate('No');
        setDueDate('');
        setCustomerName('');
        setDescription('');

    }

    
    return(
        <div>
            <Form className='mt-3'>
                <Row>
                    <Col sm={3}>
                        <label> Job Number </label>
                        <Form.Control value={jobNumber} onChange={(event) => setJobNumber(event.target.value)}/>
                    </Col>
                    <Col sm={3}>
                        <label> Number of Screens </label>
                        <Form.Control value={screens} onChange={(event) => setScreens(event.target.value)}/>
                    </Col>
                    <Col sm={3}>
                        <label> Is the Due Date Frim? </label> 
                        <Form.Control value={firmDate} onChange={(event) => setFirmDate(event.target.value)}/>
                    </Col>
                    <Col sm={3}>
                        <label> Due Date </label>
                        <Form.Control type='date' value={dueDate} onChange={(event) => setDueDate(event.target.value)}/>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col sm={6}>
                        <label> Customer Name </label>
                        <Form.Control value={customerName} onChange={(event) => setCustomerName(event.target.value)}/>
                    </Col>
                    <Col sm={6}>
                        <label> Description </label>
                        <Form.Control value={description} onChange={(event) => setDescription(event.target.value)}/>
                    </Col>
                </Row>
                <Button onClick={addToSchedule} className="mt-3" type="submit"> Add Job </Button>
            </Form>

        </div>
    );
}

export default AddJob;