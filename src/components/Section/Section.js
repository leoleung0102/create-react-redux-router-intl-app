import React from 'react'
import PropTypes from 'prop-types';
import './Section.css'


const Section = props => {
    const styles = {
        backgroundColor: props.backgroundColor,
        backgroundImage: props.backgroundImageUrl
            ? `url(${props.backgroundImageUrl})`
            : 'none',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
    };

    return (
        <section style={styles}>
            <div className="section-wrapper">
                {props.children}
            </div>
        </section>
    )
};

Section.propTypes = {
    backgroundColor: PropTypes.string,
    backgroundImageUrl: PropTypes.string,
};

Section.defaultProps = {
    backgroundColor: "transparent",
};

export default Section