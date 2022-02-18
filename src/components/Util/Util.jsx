import { UtilStyle } from './style';

export function Util(props) {
    return (
        <UtilStyle>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </UtilStyle>
    )
}