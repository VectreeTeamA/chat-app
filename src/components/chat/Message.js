import React from 'react';

const Message = (props) => {
    return (
        <div className="message">
            <div className="data">
              <div className="text">
                {props.message.message.text}
              </div>
            </div>
        </div>
    )
};

export default Message;
