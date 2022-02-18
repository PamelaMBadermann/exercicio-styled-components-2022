import React from 'react';
import { TextCardStyle } from './style';

export function TextCard(props) {
    return (
        <TextCardStyle>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </TextCardStyle>
    )
}