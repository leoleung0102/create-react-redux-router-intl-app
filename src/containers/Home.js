import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import Button from 'antd/lib/button';
import {
    switchUserLocale
} from '../reducers/IntlReducer'

const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <Button onClick={() => props.switchUserLocale('zhTW')} type="primary">Switch Language</Button>
        <Button onClick={() => props.changePage()} type="primary">Go to about page via redux</Button>
    </div>
);

const mapDispatchToProps  = (dispatch) => ({
    switchUserLocale: (userLocale) => dispatch(switchUserLocale(userLocale)),
    changePage: () => dispatch(push('/about-us'))
});

export default connect(
    null,
    mapDispatchToProps
)(Home)