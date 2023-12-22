import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Frame = styled.div`
    position: relative;
    max-width: 238.75px;
    aspect-ratio: 1 / 1;
    display: grid;
    align-items: center;
    gap: 5px;
    overflow: hidden;
`;

export function Contexts_Picture(props) {
    const link = props.link || "/default-link";
    const borderRadius = props.borderRadius || "10px";

    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button" style={{borderRadius: `${borderRadius}`}}>
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