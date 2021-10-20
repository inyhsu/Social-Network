import React from 'react';
import './Chat.scss';

import ChatList from './ChatList'
import { Col } from 'react-bootstrap';

const ChatContainer = props => {
    return (
        <>
            <Col sm={3} className="border-right height-100"> 
                <div className="chat__title">Messages</div>
                <ChatList />
            </Col>
            <Col sm={7}>
            </Col>
        </>
    )
}

export default ChatContainer