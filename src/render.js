import React from 'react';
import App from "./App";
import {addPost} from "./redux/state";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById('root'));

export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App appState={state} addPost={addPost}/>
        </React.StrictMode>
    );
};