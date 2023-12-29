import Link from 'next/link';
import styled from 'styled-components';

const Context = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export function Contexts_SideBar(props) {
    const link = props.link || "/default-link";

    return (
        <Link href={link}>
            <Context className='bC-BG e-Button'>
                {props.svg}
                <div className='tC-Text t-10pxNormal' style={{textAlign: "center"}}>{props.label}</div>
            </Context>
        </Link>
    );
}