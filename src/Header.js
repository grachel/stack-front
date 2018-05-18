import React, { Component } from 'react';
import './App.css';

class Header extends Component {
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
            <HeaderAuthorized isLoggedIn={false} />
        </div>
    </nav>
    );
  }  
}

function HeaderAuthorized(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return (
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="#" href="@{/}">Home</a></li>
                <li><a href="#" href="@{/post/ask}">Ask</a></li>
                <li><a href="#" href="@{/post/my}">My questions</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li><a>Welcome <span authentication="name">Bob</span>! </a></li>
                <li><a href="/logout" href="@{/logout}">Logout</a></li>
            </ul>
        </div>
        );
    }

    return "";
}

export default Header;
