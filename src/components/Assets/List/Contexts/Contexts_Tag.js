import { SVG_dismiss_12 } from "@/components/IconPack";
import Link from "next/link";
import styled from "styled-components";

const FrameDef = styled.div`
    height: 20px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 7px;
    border-radius: 15px;
    overflow: hidden;
`;

const FrameSelected = styled.div`
    height: 20px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 7px;
    border-radius: 15px;
    overflow: hidden;
`;

const ButtonDef = styled.div`
    display: none;
`

const ButtonSelected = styled.div`
    height: 12px;
    display:flex;
    align-items: center;
`

export function Contexts_Tag(props) {
    const link = props.link || "/default-link";
    const Frame = props.selected ? FrameSelected : FrameDef;
    const Button = props.selected ? ButtonSelected : ButtonDef;

    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
                {props.svg}
                <div className="t-SubText2-Bolder">asdf</div>
                <Button>
                    <SVG_dismiss_12 size="12"/>
                </Button>
            </Frame>
        </Link>
    );
}