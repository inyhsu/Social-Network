import React from 'react';
import './App.scss';
import Wrapper from './UI/Wrapper'
import { Row, Col } from 'react-bootstrap';

const App = props => {
    return (
        <>
            <Wrapper>
                <Row>
                    <Col sm={2}>sm=2</Col>
                    <Col sm={10}>sm=10</Col>
                </Row>
            </Wrapper>
        </>
    )
}

export default App