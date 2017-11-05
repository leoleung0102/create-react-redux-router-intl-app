import React from 'react'
import './SectionHeader.css'

const SectionHeader = props => (
    <div className="section-header-wrapper">
        {props.children}
    </div>
);

export default SectionHeader;