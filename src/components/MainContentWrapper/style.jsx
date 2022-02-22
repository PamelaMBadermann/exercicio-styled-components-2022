import styled from 'styled-components';
import Camera from '../../assets/camera.jpg';

const MainContentStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #777;
    height: 200px;
    width: inherit;
    flex-direction: column;
`;

const ContentRow = styled.div`
    display: inline-block;
    width: 50%;
    max-height: 500px;
    min-height: 500px;
    margin: 0;
    height: 70vh;
`;

const CameraBg = styled.div`
    display: flex;
    background-image: url(${Camera});
    background-size: cover;
    width: 50%;
    height: 70vh;
    justify-content: center;
    align-items: center;
`;

export { MainContentStyle, ContentRow, CameraBg };