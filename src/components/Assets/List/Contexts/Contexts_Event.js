import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Frame = styled.div`
    position: relative;
    height: 318px;
    border-radius: 10px 25px 10px 10px;
    display: grid;
    align-items: center;
    gap: 5px;
    overflow: hidden;
`;

export function Contexts_Event(props) {
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