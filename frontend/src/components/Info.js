import React, { useEffect } from 'react';

const Info = (props) => {
    return (
        <div className='info'>
            <div className="info-box">
                {JSON.stringify(props.data)}
            </div>
        </div>
    );
};

export default Info;