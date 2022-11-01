import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import React from 'react';
import App from "./App";
import ReactDOM from "react-dom/client";
import StoreContext from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App/>
                {/*<App dispatch={store.dispatch.bind(store)} store={store} state={state}/>*/}
            </StoreContext.Provider>
        </React.StrictMode>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
