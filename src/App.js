import React from 'react';
import Wrapper from './UI/Wrapper'
import { Row, Col } from 'react-bootstrap';

import ListButton from './UI/ListButton'

const App = props => {
    return (
        <>
            <Wrapper>
                <Row>
                    <Col sm={2} className="align-center">
                        <ListButton className="curser-pointer" name="Messages"/>
                    </Col>
                    <Col sm={10} className="align-center">sm=10</Col>
                </Row>
            </Wrapper>
        </>
    )
}

export default App