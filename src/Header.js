import React from 'react';
import './App.css';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
            name: "Bob"
        };
    }

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="">Stack Application</a>
                    </div>
                    <HeaderAuthorized isLoggedIn={this.state.isLoggedIn} name={this.state.name} />
                </div>
            </nav>
        );
    }
}

function HeaderAuthorized(props) {
    const isLoggedIn = props.isLoggedIn;
    const name = props.name;
    if (isLoggedIn) {
        return (
            <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li><a href="/" >Home</a></li>
                    <li><a href="/ask">Ask</a></li>
                    <li><a href="/my">My questions</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a>Welcome {name}! </a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        );
    }

    return "";
}

export default Header;
