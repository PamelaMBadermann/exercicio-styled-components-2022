import React from 'react';
import { SubheaderCardStyle } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SubheaderCard(props) {
    return (
        <SubheaderCardStyle>
            <FontAwesomeIcon icon={props.icon} size="2xl" style={{ color: '#006cd9' }}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </SubheaderCardStyle>
    );
}

export { SubheaderCard };