import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function AddJob(){
    return(
        <div>
            <Form className='mt-3'>
                <Row>
                    <Col sm={3}>
                        <label> Job Number </label>
                        <Form.Control/>
                    </Col>
                    <Col sm={3}>
                        <label> Number of Screens </label>
                        <Form.Control/>
                    </Col>
                    <Col sm={3}>
                        <label> Is the Due Date Frim? </label>
                        <Form.Select aria-label="Choose Firm Date">
                            <option> Choose an Option </option>
                            <option value="1"> Yes </option>
                            <option value="2"> No </option>
                        </Form.Select>
                    </Col>
                    <Col sm={3}>
                        <label> Due Date </label>
                        <Form.Control type='date'/>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col sm={6}>
                        <label> Customer Name </label>
                        <Form.Control/>
                    </Col>
                    <Col sm={6}>
                        <label> Description </label>
                        <Form.Control/>
                    </Col>
                </Row>
                <Button className="mt-3" type="submit"> Add Job </Button>
            </Form>

        </div>
    );
}

export default AddJob;