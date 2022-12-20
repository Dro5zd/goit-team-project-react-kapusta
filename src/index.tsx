import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux';
import {persistor, store} from './redux/store';
import {App} from './App'
import {PersistGate} from 'redux-persist/integration/react'
import {HashRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HashRouter>
                    <App/>
                </HashRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
)
