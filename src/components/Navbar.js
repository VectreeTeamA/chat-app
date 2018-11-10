import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div className="container">
                  <a className="navbar-brand" href="#">React & socket.io chat</a>
                </div>
            </nav>
        )
    }
}

export default Navbar;
