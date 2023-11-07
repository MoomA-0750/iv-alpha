import { SVG_arrow_left_12 } from "./IconPack";
import styled from "styled-components";

const Margin = styled.div`
    margin: 15px;
    display: flex;
`

export function MenuBar() {
    return(
        <Margin>
            <div className="left">
                <div className="navigationButtons">
                    <div className="back bC-BGSub e-Box">
                        <SVG_arrow_left_12 size="20"/>
                    </div>
                    <div className="home">
                    </div>
                    <div className="title">
                    </div>
                </div>
            </div>
            <div className="right">
                right
            </div>
        </Margin>
    )
}