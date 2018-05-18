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
            <nav class="navbar navbar-inverse navbar-fixed-top">
                <div class="container">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Stack Application</a>
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
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li><a href="/" >Home</a></li>
                    <li><a href="/ask">Ask</a></li>
                    <li><a href="#" onClick={myPostsClicked}>My questions</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a>Welcome {name}! </a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
        );
    }

    return "";
}

function myPostsClicked(e) {
    e.preventDefault();
}

export default Header;
