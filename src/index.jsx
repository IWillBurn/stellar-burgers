import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { store } from './services/store.js'
import { Provider } from 'react-redux'
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <App />
        </DndProvider>
    </Provider>,
)