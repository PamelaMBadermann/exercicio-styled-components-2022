import React from 'react';
import { ContentStyle } from './style';
import { Header } from '../Header/Header';
import { Subheader } from '../Subheader/Subheader';
import { MainContentWrapper } from '../MainContentWrapper/MainContentWrapper';
import { Footer } from '../Footer/Footer';

function Content() {
    return (
        <ContentStyle>
            <Header title="Minha primeira página React." />
            <Subheader />
            <MainContentWrapper />
            <Footer title="Contato" />
        </ContentStyle>
    );
};

export { Content };