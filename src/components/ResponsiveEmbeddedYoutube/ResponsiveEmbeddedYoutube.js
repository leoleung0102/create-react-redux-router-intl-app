import React from 'react'
import PropTypes from 'prop-types';
import './ResponsiveEmbeddedYoutube.css'

const ResponsiveEmbeddedYoutube = props => (
    <div className="youtube-wrapper">
        <iframe title="demo-video" width="560" height="315" src={props.src} frameBorder="0" allowFullScreen></iframe>
    </div>
);

ResponsiveEmbeddedYoutube.propTypes = {
  src: PropTypes.string.isRequired
};

export default ResponsiveEmbeddedYoutube

