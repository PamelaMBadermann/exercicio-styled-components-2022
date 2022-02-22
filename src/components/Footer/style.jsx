import styled from 'styled-components';
import Ocean from '../../assets/ocean.jpg';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FooterStyle = styled.div`
    display: flex;
    background-image: url(${Ocean});
    background-size: cover;
    width: 100%;
    height: 300px;
    justify-content: center;
    align-items: center;
    color: #a4dff5;
`;

const RootFooterContactCard = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
`;

const Left = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 100px;
    padding-left: 50px;
    background-color: #fff;
    
    * {
        margin-left: 10px;
        color: #006cd9;
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 50%;
    height: 100px;
    background-color: #fff;

    * {
        margin-left: 10px;
        color: #006cd9;
    }
`;

const IconCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    padding: 10px;
`;

const FooterContactCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Arial';
    margin: 0;
    width: 25%;
    align-items: center;
    height: auto;
`;

const FooterContact = styled.div`

`;

export { Root, FooterStyle, FooterContact, RootFooterContactCard, FooterContactCard, Left, Right, IconCard };