import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './containers/app/App';
import Ask from './containers/ask/Ask';
import registerServiceWorker from './registerServiceWorker';
import Header from './containers/header/Header';
import Footer from './containers/footer/Footer';
import Post from './containers/post/Post';
import MyPosts from './containers/posts/MyPosts';
import Home from './containers/home/Home';

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
                    <Route path='/' component={App} />
                </Switch>
            </div>
        </BrowserRouter>
        <Footer />
    </div>
), document.getElementById('root')
);

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

registerServiceWorker();
