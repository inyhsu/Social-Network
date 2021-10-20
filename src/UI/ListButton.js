import React from 'react';
import './ListButton.scss';

const ListButton = props => {
    return (
        <>
            <div className={`${props.className} list-button`}>
                <div >{props.name}</div>
            </div>
        </>
    )
}

export default ListButton