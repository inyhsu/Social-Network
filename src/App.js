import React from 'react';
import Wrapper from './UI/Wrapper'
import { Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import ListButton from './UI/ListButton'
import ChatContainer from './components/Chat/ChatContainer'

const Home = props => {
    return <h2>Home</h2>
}

const App = props => {
    return (
        <>
            <Wrapper>
                <Row className="height-100">
                    <Router>
                        <Col sm={2} className="align-center border-right">
                            <Link to="/messages">
                                <ListButton className="curser-pointer" name="Messages" />
                            </Link>
                        </Col>
                        <Col sm={10}>

                            <Switch>
                                <Route path="/messages">
                                    <ChatContainer />
                                </Route>
                                <Route path="/">
                                    <Home />
                                </Route>
                            </Switch>

                        </Col>
                    </Router>
                </Row>
            </Wrapper>
        </>
    )
}

export default App