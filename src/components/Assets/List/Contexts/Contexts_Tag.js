import { SVG_dismiss_12 } from "@/components/IconPack";
import Link from "next/link";
import styled from "styled-components";

const Frame = styled.div`
    height: 20px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 7px;
    border-radius: 15px;
    overflow: hidden;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2px;
`;

export function Contexts_Tag(props) {
    const link = props.link || "/default-link";

    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
                {props.svg}
                <TextBox>
                    {/* <div className="t-SubText2-Bolder">{props.title}</div> */}
                    <div className="t-SubText2-Bolder">asdf</div>
                    <SVG_dismiss_12 size="12" />
                </TextBox>
            </Frame>
        </Link>
    );
}