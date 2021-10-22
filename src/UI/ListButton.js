import React from 'react';
import './ListButton.scss';
import { FaRegEnvelope } from "react-icons/fa";

const ListButton = props => {
    return (
        <>
            <div className={`${props.className} list-button`}>
                <FaRegEnvelope style={{ fontSize: '30px'}} />
                <div className="list-button__name">{props.name}</div>
            </div>
        </>
    )
}

export default ListButton