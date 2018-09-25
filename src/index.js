import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import App from './containers/App';
import Ask from './containers/Ask';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Post from './containers/Post';
import MyPosts from './containers/MyPosts';
import Home from './containers/Home';
import PrivateRoute from './security/PrivateRoute';

ReactDOM.render((
    <div>
        <Header />
        <BrowserRouter>
            <div>
                <Switch>
                    <PrivateRoute path='/my' component={MyPosts} />
                    <PrivateRoute path='/post/:id' component={Post} />
                    <PrivateRoute path='/ask' component={Ask} />
                    <PrivateRoute path='/home' component={Home} />
                    <PrivateRoute path='/' component={App} />
                </Switch>
            </div>
        </BrowserRouter>
        <Footer />
    </div>
), document.getElementById('root')
);
  
registerServiceWorker();
