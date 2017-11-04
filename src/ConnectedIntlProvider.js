import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

const mapStateToProps = (state) => {
    return {
        key: state.IntlReducer.userLocale.substring(0,2),
        locale: state.IntlReducer.userLocale.substring(0,2),
        messages: state.IntlReducer.localeMessages };
};

export default connect(mapStateToProps)(IntlProvider);