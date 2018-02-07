// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import 'antd/dist/antd.css';
import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import {addLocaleData} from 'react-intl';
import App from './App';
import ConnectedIntlProvider from './ConnectedIntlProvider';
import registerServiceWorker from './registerServiceWorker';
//Locale Setting
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
[en, zh].forEach(addLocaleData);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(
        <Provider store={store}>
            <ConnectedIntlProvider>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </ConnectedIntlProvider>
        </Provider>
        , rootElement);
} else {
    render(
        <Provider store={store}>
            <ConnectedIntlProvider>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </ConnectedIntlProvider>
        </Provider>
        , rootElement);
}
registerServiceWorker();
