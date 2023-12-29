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
    const color = props.color || "";
    const fOpacity = props.fOpacity || "0";

    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
                <Image
                    layout="fill"
                    src={props.bg}
                    style={{objectFit: "cover"}}
                    alt='Picture'
                />
                <div style={{fontWeight:"800", color:`${color}`, position:"absolute", width:"100%", textAlign:"center", top:"40px", fontSize:"40px"}}>{props.title}</div>
                <Image style={{filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.25))", objectFit: "contain", position:"absolute", top:`${props.top}`, left:`${props.left}`, scale:`${props.scale}`}}
                    layout="fill"
                    src={props.image}
                    alt='Picture'
                />
                <div style={{fontWeight:"800", color:`${color}`, position:"absolute", width:"100%", textAlign:"center", top:"40px", fontSize:"40px", opacity:`${fOpacity}`}}>{props.title}</div>
            </Frame>
        </Link>
    );
}