import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

const mapStateToProps = (state) => {
    return { locale: state.IntlReducer.userLocale.substring(0,2), messages: state.IntlReducer.localeMessages };
};

export default connect(mapStateToProps)(IntlProvider);