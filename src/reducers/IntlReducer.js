import {localeDict} from '../config';
import {messages} from '../translations/locales/';

export const SWITCH_USER_LOCALE = 'SWITCH_USER_LOCALE';

const initialState = {
    userLocale: Object.keys(localeDict)[0].replace('-',''),
    localeMessages: messages[Object.keys(localeDict)[0].replace('-','')]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_USER_LOCALE:
            return {
                ...state,
                userLocale: action.payload.userLocale,
                localeMessages: {...action.payload.localeMessages}
            };

        default:
            return state
    }
}

export const switchUserLocale = (userLocale) => ({
    type: SWITCH_USER_LOCALE,
    payload: {
        userLocale: userLocale.replace('-',''),
        localeMessages: messages[userLocale.replace('-','')]
    }
});
