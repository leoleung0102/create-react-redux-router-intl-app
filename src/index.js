import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import { IntlProvider } from 'react-intl';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import App from './App';
import ConnectedIntlProvider from './ConnectedIntlProvider';
import registerServiceWorker from './registerServiceWorker';
// import enLocaleData from './translations/locales/en-US.json';
// import zhLocaleData from './translations/locales/zh-TW.json';

addLocaleData([...en,...zh ]);
// const messages = {...enLocaleData, ...zhLocaleData};
// let locale = 'en';
// setTimeout(()=>{
//     console.log(locale)
//     locale ='zh';
//     console.log('tes232t');
// },2000);


ReactDOM.render(
    <Provider store={store}>
            <ConnectedIntlProvider>
                <ConnectedRouter history={history}>
                    <App />
                </ConnectedRouter>
            </ConnectedIntlProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
