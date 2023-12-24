import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Frame = styled.div`
    position: relative;
    max-width: 238.75px;
    border-radius: 10px;
    aspect-ratio: 955 / 1272;
    display: grid;
    align-items: center;
    gap: 5px;
    overflow: hidden;
`;

export function Contexts_Portrait(props) {
    const link = props.link || "/default-link";

    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
                <Image
                    layout="fill"
                    src={props.image}
                    objectFit="cover"
                    alt='Picture'
                />
            </Frame>
        </Link>
    );
}