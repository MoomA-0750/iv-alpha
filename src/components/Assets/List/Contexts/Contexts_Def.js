import Link from "next/link";
import styled from "styled-components";

const Frame = styled.div`
    height: 60px;
    padding: 0 15px;
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    overflow: hidden;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2px;
`;

export function Contexts_Def(props) {
    const link = props.link || "/default-link";
    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
                {props.svg}
                <TextBox>
                    <div className="t-Text-Bolder">{props.title}</div>
                    <div className="t-SubText-Normal tC-TextSub">{props.subTitle}</div>
                </TextBox>
            </Frame>
        </Link>
    );
}