import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function fun(user){
    return user.firstname +' '+user.lastname
}
const user={firstname:'jimmy',lastname:'john'}

const name='Jimmy the idiot'
const element =<h1>Hello {name}</h1>
const user1 =<h1>Hellow {fun(user)}</h1>
const test=(
    <div>
        <div id="1"></div>
        <div id="2"></div>
    </div>
)


ReactDOM.render(user1,document.getElementById('root'));
registerServiceWorker();
