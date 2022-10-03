import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, text: 'Hi. how are you?', likesCount: 10},
    {id: 2, text: 'It\'s my first post', likesCount: 15},
];

let dialogs = [
    {id: 1, name: 'Duke'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Kate'},
    {id: 4, name: 'River'},
    {id: 5, name: 'Vitaly'},
    {id: 6, name: 'Valera'}
];

let messages = [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'How are you?'},
    {id: 3, text: 'Yo'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
