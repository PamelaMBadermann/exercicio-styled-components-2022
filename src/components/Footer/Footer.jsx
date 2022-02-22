import React from 'react';
import { Root, FooterStyle, RootFooterContactCard, Left, Right, IconCard } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

function Footer(props) {
    try {
        return (
            <Root>
                <FooterStyle>
                    <h1>{props.title}</h1>
                </FooterStyle>
                <RootFooterContactCard>
                    <Left>
                        <Link to="/about" >About</Link>
                        <p>•</p>
                        <Link to="/contact" >Contact</Link>
                        <p>•</p>
                        <Link to="/termsofuse" >Terms os use</Link>
                        <p>•</p>
                        <Link to="/privacypolicy" >Privacy Policy</Link>
                    </Left>
                    <Right>
                        <IconCard>
                            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={ faFacebook } size="2xl" style={{ color: '#006cd9' }} />
                            </a>
                        </IconCard>
                        <IconCard>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={ faTwitter } size="2xl" style={{ color: '#006cd9' }} />
                            </a>
                        </IconCard>
                        <IconCard>
                            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={ faInstagram } size="2xl" style={{ color: '#006cd9' }} />
                            </a>
                        </IconCard>
                    </Right>
                </RootFooterContactCard>
            </Root>
        );
    } catch(error) {
        return console.log(error)
    }
}

export { Footer };