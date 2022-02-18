import React from 'react';
import { BackgroundImage } from './style';

function SingleLabelOcean(props) {
    return (
        <BackgroundImage>
            <h1>{props.label}</h1>
        </BackgroundImage>
    )
}

export { SingleLabelOcean };