import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Ask from './Ask';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';

ReactDOM.render((
    <div>
        <Header />
        <BrowserRouter>
            <div>
                <Switch>
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
