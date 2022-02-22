import React from 'react';
import { SubheaderStyle } from './style';
import { SubheaderCard } from '../SubheaderCard/SubheaderCard';
import { faDesktop, faFolderTree, faHandshake } from '@fortawesome/free-solid-svg-icons';


function Subheader() {
    return (
        <SubheaderStyle>
            <SubheaderCard title="Somente para Desktop" text="Vamos aprender como usar um framework" icon={faDesktop} />
            <SubheaderCard title="Criado com componentes" text="Utilizamos Styled Components" icon={faFolderTree}/>
            <SubheaderCard title="Fácil Aproveitamento" text="Estamos no caminho" icon={faHandshake}/>
        </SubheaderStyle>
    );
}

export { Subheader };