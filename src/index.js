import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Ask from './Ask';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';
import Footer from './Footer';

ReactDOM.render((
    <div>
        <Header />
        <BrowserRouter>
            <div>
                <Route path='/' component={App} />
                <Route path='/ask' component={Ask} />
            </div>
        </BrowserRouter>
        <Footer />
    </div>
), document.getElementById('root')
);
registerServiceWorker();
