import React from 'react';
import Container from 'react-bootstrap/Container';

const Wrapper = props => {
    return (
        <>
            <Container className={props.className}>
                {props.children}
            </Container>
        </>
    )
}

export default Wrapper