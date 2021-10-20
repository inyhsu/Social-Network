import React from 'react';
import Wrapper from './UI/Wrapper'
import { Row, Col } from 'react-bootstrap';

import ListButton from './UI/ListButton'
import ChatContainer from './components/Chat/ChatContainer'

const App = props => {
    return (
        <>
            <Wrapper>
                <Row>
                    <Col sm={2} className="align-center">
                        <ListButton className="curser-pointer" name="Messages"/>
                    </Col>
                    <Col sm={10}>
                        <ChatContainer />
                    </Col>
                </Row>
            </Wrapper>
        </>
    )
}

export default App