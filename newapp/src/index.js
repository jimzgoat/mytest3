import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function fun(user){
    return user.firstname +' '+user.lastname
}

function tick(){
    const element=  <div>
                        <h1>New clock</h1>
                         <h2>{new Date().toLocaleString()} </h2>
                    </div>
                    ReactDOM.render(element,document.getElementById('root'));
}

const user={firstname:'jimmy',lastname:'john'}

const name='Jimmy the idiot'
const element =<h1>Hello {name}</h1>
const user1 =<div><h1> {tick()}</h1></div>

setInterval(tick, 1000);

