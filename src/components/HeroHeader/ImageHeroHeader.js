import React from 'react';
import PropTypes from 'prop-types';
import './ImageHeroHeader.css';

const ImageHeroHeader = props => {

    const styles = {
        height: `${props.minHeight}vh`,
        backgroundImage: props.backgroundImageUrl
            ? `url(${props.backgroundImageUrl})`
            : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    };

    return (
        <div className="hero-header" style={styles}>
            <div className="hero-header-wrapper">
                {props.children}
            </div>
        </div>
    );
};

ImageHeroHeader.propTypes = {
    backgroundImageUrl: PropTypes.string,
    minHeight: PropTypes.number,
};

export default ImageHeroHeader;