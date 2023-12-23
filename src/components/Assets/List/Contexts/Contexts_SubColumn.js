import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Frame = styled.div`
    height: 40px;
    padding: 5px;
    display: grid;
    grid-template-columns: 40px 1fr;
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

const Icon = styled.div`
    position: relative;
    max-width: 238.75px;
    border-radius: 5px;
    aspect-ratio: 1 / 1;
    display: grid;
    align-items: center;
    gap: 5px;
    overflow: hidden;
`;

export function Contexts_SubColumn(props) {
    const link = props.link || "/default-link";
    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
<<<<<<< HEAD
                <Icon className="bC-BG e-Button">
                    <Image
                        layout="fill"
                        src={props.image}
                        objectFit="cover"
                        alt='Picture'
                    />
                </Icon>
=======
                <Contexts_Picture
                    image={props.image}
                />
>>>>>>> f415256e23bcf0d78c9dd396fad27bab96524006
                <TextBox>
                    <div className="t-Text-Bolder">{props.title}</div>
                    <div className="t-SubText-Normal tC-TextSub">{props.subTitle}</div>
                </TextBox>
            </Frame>
        </Link>
    );
}