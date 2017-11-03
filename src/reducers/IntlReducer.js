import {locale} from '../config';
import {messages} from '../translations/locales/';

export const SWITCH_USER_LOCALE = 'SWITCH_USER_LOCALE';

const initialState = {
    userLocale: locale[0].replace('-',''),
    localeMessages: messages[this.userLocale]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_USER_LOCALE:
            return {
                ...state,
                userLocale: state.userLocale,
                localeMessages: {...action.payload.localeMessages}
            };

        default:
            return state
    }
}

export const switchUserLocale = (userLocale) => ({
    type: SWITCH_USER_LOCALE,
    payload: {
        localeMessages: messages[userLocale]
    }
});
