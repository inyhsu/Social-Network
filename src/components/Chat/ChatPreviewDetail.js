import React from 'react';

import Avatar from 'react-avatar';

const ChatPreviewDetail = props => {
    return (
        <>
            <div className="chat__preview-container">
                <Avatar name="Ingrid Su"size="50" round={true}/>
                <div className="chat__preview-message">message</div>
            </div>
        </>
    )
}

export default ChatPreviewDetail