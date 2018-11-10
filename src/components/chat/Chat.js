import React from 'react';
import Messages from "./Messages";
import socketIOClient from 'socket.io-client';

class Chat extends React.Component {

    constructor(props){
        super(props);
        this.socket = null;
        this.state = {
            messages : [],
            message : ''
        }
    }

    componentDidMount(){
      this.initChat();
    }

    sendMessage(message, e){
        this.setState({
            messages : this.state.messages.concat([{
               message : message,
           }])
        });
        this.socket.emit('message', {
            message : message,
        });
        this.scrollToBottom();
    }

    scrollToBottom(){
        let messages = document.getElementsByClassName('messages')[0];
        messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    }

    initChat(){
        this.socket = socketIOClient('ws://localhost:8989');

        this.socket.on('message', function (message) {
            this.setState({
                messages : this.state.messages.concat([message])
            });
            this.scrollToBottom();
        }.bind(this));
    }

    render() {
        return (
            <div className="chat">
                <React.Fragment>
                    <Messages
                        sendMessage={this.sendMessage.bind(this)}
                        messages={this.state.messages}
                    />
                </React.Fragment>
            </div>
        )
    }
}

export default Chat;
