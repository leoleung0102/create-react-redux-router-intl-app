import React from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import {
    switchUserLocale
} from '../reducers/IntlReducer'

const Home = props => (
    <div>
        <h1>Home</h1>
        <p>Welcome home!</p>
        <button onClick={() => props.switchUserLocale('en')}>Switch Language</button>
        <button onClick={() => props.changePage()}>Go to about page via redux</button>
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