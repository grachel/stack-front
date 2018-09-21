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

ReactDOM.render((
    <div>
        <Header />
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/my' component={MyPosts} />
                    <Route path='/post/:id' component={Post} />
                    <Route path='/ask' component={Ask} />
                    <Route path='/' component={App} />
                </Switch>
            </div>
        </BrowserRouter>
        <Footer />
    </div>
), document.getElementById('root')
);
registerServiceWorker();
