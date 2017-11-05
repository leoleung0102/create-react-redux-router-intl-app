import React from 'react'
import { connect } from 'react-redux'
import {localeDict} from '../../config';
import Radio from 'antd/lib/radio';
import './LanguageSwitcher.css'

import {
    switchUserLocale
} from '../../reducers/IntlReducer'

const LanguageSwitcher = props => {
    const isSelected = locale => locale.replace('-','') === props.currentLocale;
    const localeName = locale => localeDict[locale] || locale;
    const localeKeys = Object.keys(localeDict);
    return (
        <Radio.Group>
            {localeKeys.map(locale =>
                <Radio.Button
                    key={locale}
                    className={`language-switcher-transparent ${isSelected(locale)? 'active-locale':''}`}
                    href={`?lang=${locale}`}
                    onClick={e => {
                        props.switchUserLocale(locale);
                        e.preventDefault();
                    }}
                >
                    {localeName(locale)}
                </Radio.Button>,
            )}
        </Radio.Group>
    );
};


const mapStateToProps = state => ({
    currentLocale: state.IntlReducer.userLocale,
});

const mapDispatchToProps  = (dispatch) => ({
    switchUserLocale: (userLocale) => dispatch(switchUserLocale(userLocale)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LanguageSwitcher)