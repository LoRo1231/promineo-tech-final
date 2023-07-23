import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function JobDisplay() {
    return(
        <div>
            <div className='heading h2 p-3'> Screen Printing Schedule </div>

        <Container>
            <Table striped bordered hover variant="dark text-center mt-4">
                <thead>
                    <Row className='h5 dflex align-items-center'>
                        <Col sm={1}> Job # </Col>
                        <Col sm={3}> Customer Name </Col>
                        <Col sm={4}> Description </Col>
                        <Col sm={1}> Screens </Col>
                        <Col sm={1}> Firm? </Col>
                        <Col sm={1}> Due Date </Col>
                        <Col sm={1}> Actions </Col>
                    </Row>
                </thead>
                <tbody className='dflex align-items-center'>
                    <Row>
                        <Col sm={1}> 423667 </Col>
                        <Col sm={3}> Holley </Col>
                        <Col sm={4}> Hoodies </Col>
                        <Col sm={1}> 1/3 </Col>
                        <Col sm={1}> Yes </Col>
                        <Col sm={1}> 7/31/23 </Col>
                        <Col sm={1}> <Button variant='danger'> Delete </Button> </Col>
                    </Row>
                </tbody>
            </Table>
        </Container>
        </div>
    
    );
}

export default JobDisplay;