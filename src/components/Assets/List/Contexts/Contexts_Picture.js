import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Frame = styled.div`
    max-width: 235.75px;
    aspect-ratio: 1 / 1;
    display: grid;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    overflow: hidden;
`;

export function Contexts_Picture(props) {
    const link = props.link || "/default-link";

    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
                {/* <Image className="e-Button" style={`object-fit:cover;`}
                    src={props.image}
                    width={1920}
                    height={1080}
                    alt='Picture'
                /> */}
                <img src={props.image} style={`object-fit:cover;`}/>
            </Frame>
        </Link>
    );
}