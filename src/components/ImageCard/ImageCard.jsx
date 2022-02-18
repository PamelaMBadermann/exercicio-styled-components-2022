import React from 'react';
import { ImageCardStyle } from './style';

export function ImageCard(props) {
    return (
        <ImageCardStyle>
            {props.image}
        </ImageCardStyle>
    )
}