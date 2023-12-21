import Link from "next/link";
import styled from "styled-components";

const Frame = styled.div`
    height: 40px;
    padding: 5px;
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    overflow: hidden;
`;

const Pic = styled.div`
    aspect-ratio: 1 / 1;
    display: grid;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2px;
`;

export function Contexts_SubColumn(props) {
    const link = props.link || "/default-link";
    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
                <Pic></Pic>
                <TextBox>
                    <div className="t-Text-Bolder">{props.title}</div>
                    <div className="t-SubText-Normal tC-TextSub">{props.subTitle}</div>
                </TextBox>
            </Frame>
        </Link>
    );
}