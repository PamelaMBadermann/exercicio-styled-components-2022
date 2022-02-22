import styled from 'styled-components';
import Ocean from '../../assets/ocean.jpg';

const HeaderStyle = styled.div`
    display: flex;
    background-image: url(${Ocean});
    background-size: cover;
    width: 100%;
    height: 500px;
    justify-content: center;
    align-items: center;
    color: #a4dff5
`;

export { HeaderStyle };