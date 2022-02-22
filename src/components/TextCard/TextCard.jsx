import React from 'react';
import { TextCardStyle } from './style';

function TextCard(props) {
    return (
        <TextCardStyle>
            <p>{props.text}</p>
        </TextCardStyle>
    )
}

export { TextCard };