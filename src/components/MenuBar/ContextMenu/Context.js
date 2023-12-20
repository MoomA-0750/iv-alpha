import Link from 'next/link'
import styled from 'styled-components'

const Context = styled.div`
padding: 0 14px;
display: flex;
height: 50px;
padding: 0 14px;

justify-content: center;
align-items: center;
border-radius: 50px;
`

const ContextSelected = styled.div`
padding: 0 14px;
display: flex;
height: 50px;
padding: 0 14px;

justify-content: center;
align-items: center;
border-radius: 50px;

background-color: rgba(255, 255, 255, 0.8);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`

export function MbContextMenu_Context(props) {
    const link = props.link || "/default-link";
    const Component = props.selected ? ContextSelected : Context;
    return (
        <Link href={link}><Component>{props.text}</Component></Link>
    )
}