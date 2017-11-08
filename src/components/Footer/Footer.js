import React from 'react';
import PropTypes from 'prop-types';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import './Footer.css';


const Footer = props => (
    <footer className="footer">
        <div className="footer-wrapper">
            <Row type="flex" justify="space-around" align="top">
                <Col xs={24} lg={12} className="company-info">
                    <p>Address 1</p>
                    <p>Address 2</p>
                    <p>Address 3</p>
                    <p>Address 4</p>
                </Col>
                <Col xs={24} lg={4} className="footer-menu">
                    <h2>Company</h2>
                    <Link to="/about-us">About Us</Link>
                    <p>About Us</p>
                </Col>
                <Col xs={24} lg={4} className="footer-menu">
                    <h2>Company</h2>
                    <p>About Us</p>
                </Col>
                <Col xs={24} lg={4} className="footer-menu">
                    <h2>Company</h2>
                    <p>About Us</p>
                </Col>
            </Row>
            <hr/>
            <Row type="flex" justify="space-around" align="middle">
                <Col xs={12} lg={12} className="company-logo">
                    <img
                        width="100%"
                        alt="Brand logo"
                        src={props.brandLogoUrl}
                    />
                </Col>
                <Col xs={12} lg={12} className="footer-right">
                    <p>© {new Date().getFullYear()} Company Limited</p>
                </Col>
            </Row>
        </div>

    </footer>
);

Footer.propTypes = {
    brandLogoUrl: PropTypes.string.isRequired
};


export default Footer