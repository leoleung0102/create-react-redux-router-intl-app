import React from 'react'
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import Menu, {Item} from 'antd/lib/menu';
import {Link} from 'react-router-dom';
import LanguageSwitcher from '../../containers/LanguageSwitcher/LanguageSwitcher'
import './AntdTopNavigation.css';

const AntdTopNavigation = props => (
    <div className="top-navigation">
        <div className="logo">
            <img
                width="100%"
                alt="Brand logo"
                src={props.brandLogoUrl}
            />
        </div>
        <div className="top-navigation-item">
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['0']}
            >
                <Item key="language-switcher" className="language-switcher-transparent-bottom">
                    <LanguageSwitcher></LanguageSwitcher>
                </Item>
                <Item key="home">
                    <Link to="/">Home1</Link>
                </Item>
                <Item key="about">
                    <Link to="/about-us">About</Link>
                </Item>
            </Menu>
        </div>

    </div>

);

AntdTopNavigation.propTypes = {
    brandLogoUrl : PropTypes.string.isRequired
};

export default AntdTopNavigation;