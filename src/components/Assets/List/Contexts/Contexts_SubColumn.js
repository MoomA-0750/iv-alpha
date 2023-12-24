import Link from "next/link";
import Image from "next/image";
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

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2px;
`;

const IconShow = styled.div`
    position: relative;
    width: 40px;
    border-radius: 5px;
    aspect-ratio: 1 / 1;
    display: grid;
    align-items: center;
    gap: 5px;
    overflow: hidden;
`;

const IconHidden = styled.div`
    display: none;
`;

export function Contexts_SubColumn(props) {
    const link = props.link || "/default-link";
    const Icon = !props.image ? IconHidden : IconShow;

    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
                <Icon className="bC-BG e-Button">
                    <Image
                        layout="fill"
                        src={props.image}
                        objectFit="cover"
                        alt='Picture'
                    />
                </Icon>
                <TextBox>
                    <div className="t-Text-Bolder">{props.title}</div>
                    <div className="t-SubText-Normal tC-TextSub">{props.subTitle}</div>
                </TextBox>
            </Frame>
        </Link>
    );
}