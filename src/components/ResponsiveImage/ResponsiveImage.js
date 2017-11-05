import React from 'react'
import PropTypes from 'prop-types';
import './ResponsiveImage.css'

const ResponsiveImage = props => {
    return (
        <img className="responsive-image" alt={props.alt} src={props.src} width={props.width}>
            {props.children}
        </img>
    )
};

ResponsiveImage.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.string
};

ResponsiveImage.defaultProps = {
    width: "100%"
};


export default ResponsiveImage