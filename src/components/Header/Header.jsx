import React from 'react';
import { HeaderStyle } from './style';

function Header(props) {
    try {
        return (
            <HeaderStyle>
                <h1>{props.title}</h1>
            </HeaderStyle>
        );
    } catch(error) {
        return console.log(error)
    }
}

export { Header };