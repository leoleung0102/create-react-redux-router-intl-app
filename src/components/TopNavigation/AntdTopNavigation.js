import React,{Component} from 'react'
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Menu, {Item} from 'antd/lib/menu';
import LanguageSwitcher from '../../containers/LanguageSwitcher/LanguageSwitcher'
import './AntdTopNavigation.css';

class AntdTopNavigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            isTop: true
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            console.log(window.scrollY <= 100);
            console.log(window.scrollY);
            this.setState({ isTop: window.scrollY <= 800 })
        });
    }

    clickMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen,
        });
    };

    render() {
        return (
            <div className={`top-navigation ${this.state.isTop?'':'overlay'}`}>
                <div className="logo">
                    <img
                        width="100%"
                        alt="Brand logo"
                        src={this.props.brandLogoUrl}
                    />
                </div>
                <MediaQuery minWidth={1224} values={{width: 1600}}>
                    <div className="top-navigation-item">
                        <Menu
                            mode="horizontal"
                            defaultSelectedKeys={['0']}
                        >
                            <Item key="language-switcher" className="language-switcher-transparent-bottom">
                                <LanguageSwitcher></LanguageSwitcher>
                            </Item>
                            {this.props.children}
                        </Menu>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                    <div className='top-navigation-item'>
                        <div className={`hamburger-menu ${this.state.menuOpen?'open':''}`}>
                            <div className='hamburger-menu-button' onClick={() => {
                                this.clickMenu();
                            }}>
                                <em />
                                <em />
                                <em />
                            </div>
                            <div className='hamburger-menu-item'>
                                <Menu defaultSelectedKeys={['0']} mode="inline" theme="dark" onClick={() => {this.clickMenu();}}>
                                    {this.props.children}
                                </Menu>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </div>
        )
    }

};

AntdTopNavigation.propTypes = {
    brandLogoUrl : PropTypes.string.isRequired
};

export default AntdTopNavigation;