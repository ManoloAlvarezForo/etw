import React from 'react';

const Toolbar = ({ title = 'Default Title' }) => {
    return (
        <div style={{ width: '100%', height: '54px' }}>
            <div style={{ fontSize: '1.5rem', margin: '10px', fontWeight: 'bold' }}>{title}</div>
        </div>
    )
}

export default Toolbar;