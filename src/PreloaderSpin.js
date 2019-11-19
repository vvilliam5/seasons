import React from 'react';
import { tsPropertySignature } from '@babel/types';

const PreloaderSpin = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui massive text loader">{props.title}</div>
        </div>
    )
}

PreloaderSpin.defaultProps = {
    title: 'Loading...'
}
export default PreloaderSpin;