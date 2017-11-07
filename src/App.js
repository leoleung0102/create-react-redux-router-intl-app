import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import {Item} from 'antd/lib/menu';
import AntdTopNavigation from './components/TopNavigation/AntdTopNavigation';
import Footer from './components/Footer/Footer';
import Home from './containers/Home';
import About from './containers/About';


class App extends Component {
    render() {
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

                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
                <main>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about-us" component={About}/>
                </main>
                <Footer
                    brandLogoUrl="http://www.brianfajardo.com/static/media/reactjs.0068a577.svg"
                >

                </Footer>

            </div>
        );
    }
}

export default App;
