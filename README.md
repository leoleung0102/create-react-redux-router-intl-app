# Create React Redux Router Intl App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It is integrated with [redux](https://github.com/reactjs/redux), [react-router v4](https://github.com/ReactTraining/react-router) and [react-intl](https://github.com/yahoo/react-intl)
The UI library used is [Ant design](https://github.com/ant-design/ant-design) as default.

It also includes some basic components like fixed top navigation and language switcher to adopt i18n as the starting point.

[Demo](https://oscaryuen.github.io/create-react-redux-router-intl-app/)

## Getting Started

Clone project
```bash
# with SSH
git clone git@github.com:OscarYuen/create-react-redux-router-intl-app.git YOUR_PROJECT_NAME

# with HTTPS
git clone https://github.com/OscarYuen/create-react-redux-router-intl-app.git YOUR_PROJECT_NAME
```

### Prerequisites

You need to install the following library in order to translate your react app into json format message

```
npm install -g cross-env
```

### Installing

Every start, build, test, eject command are the same as [Create React App](https://github.com/facebookincubator/create-react-app).
There are two more new commands(build-translate and build-langs) for internationalizing your react app.

### How to add a new locale

1. Add new locale in `src/config.js` under src folder

```js
//Locale Setting
//The first locale would be the default locale
//The key is the locale and the value would be the locale display name
export const localeDict = {
    'en-GB' : 'English',
    'zh-TW' : 'Chinese'
};
```
Note that you should follow
[BCP 47](https://tools.ietf.org/html/bcp47)
([RFC 5646](https://tools.ietf.org/html/rfc5646)).

2. Add locale support in `src/index.js`:
```js
//Locale Setting
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
[en, zh].forEach(addLocaleData);
```

3. Execute `npm build-translate` to strip out messages from your React component.
   Message files are created in `src/translations/messages` directory.
   You could refer to [react-intl](https://github.com/yahoo/react-intl) to see how to internationalize your React component


4. Execute `npm build-langs` to copy your message file into different message json file by locale.
   For example, you would see `en-GB.json` and `zh-TW.json` under locales folder
   You could translate the message in the json files respectively
   
## How to switch language dynamically
1. Language Switcher component is included under `/src/components/LanguageSwitcher` folder. It would generated the locale options by your `src/config.js` and allow you to switch language

## How to use the redux

1. You can add your reducer under `src/reducers` folder

2. Redux action and reducer are put in the same file for simplicity's sake. You could take `IntlReducer.js` as an example

3. Add your reducer to root reducer
```js
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import IntlReducer from './IntlReducer';

export default combineReducers({
    routing: routerReducer,
    IntlReducer
})
```

## How to use the react-router

1. It is already configured with react-router setting. You could find the usage [react-router](https://github.com/ReactTraining/react-router).

## Switching Ant Design to Boostrap

1. You could comment the ant design css import and comment out the boostrap css import in `src/index.js`

```js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// import 'antd/dist/antd.css';
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


