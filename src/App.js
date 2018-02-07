import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, withRouter} from 'react-router-dom';
import Routes from "./Routes";
import {Item} from 'antd/lib/menu';
import AntdTopNavigation from './components/TopNavigation/AntdTopNavigation';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        const childProps = {
            isAuthenticated: false
        };

        return (
            <div className="App">
                <AntdTopNavigation
                    brandLogoUrl="http://www.brianfajardo.com/static/media/reactjs.0068a577.svg"
                >
                    <Item key="home">
                        <Link to="/">Home</Link>
                    </Item>
                    <Item key="about">
                        <Link to="/about-us">About</Link>
                    </Item>
                </AntdTopNavigation>
                <main>
                    <Routes childProps={childProps}/>
                </main>
                <Footer
                    brandLogoUrl="http://www.brianfajardo.com/static/media/reactjs.0068a577.svg"
                >
                </Footer>
            </div>
        );
    }
}

export default withRouter(App);
