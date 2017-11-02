import enLocaleData from '../translations/locales/en-US.json';
import zhLocaleData from '../translations/locales/zh-TW.json';

export const SWITCH_USER_LOCALE = 'SWITCH_USER_LOCALE';

const messages = {...enLocaleData, ...zhLocaleData};
const initialState = {
    userLocale: 'zh',
    localeMessages: messages['zh']
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
