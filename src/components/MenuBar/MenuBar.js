import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SVG_arrow_left_12, SVG_home_12 } from '../IconPack';
import { MbContextMenu } from './ContextMenu.js';

const MenuBarBody = styled.div`
    display: flex;
    width: calc(100vw - 30px);
    height: 50px;
    margin: 15px;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: stretch;
`;

const NavButtons = styled.div`
    display: flex;
    padding: 4px;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 34px;
`;

const Back = styled.div`
    display: flex;
    width: 42px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 28px 5px 5px 28px;
`;

const Home = styled.div`
    display: flex;
    width: 42px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 5px 28px 28px 5px;
`;

const Label = styled.div`
    display: flex;
    padding: 0px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-self: stretch;
    border-radius: 28px;
`

const SubTitle = styled.div`
    /* ここにsubTitleのCSSを記述 */
`

const Title = styled.div`
    /* ここにtitleのCSSを記述 */
`

const Right = styled.div`
    display: flex;
    padding: 4px;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 28px;
`

const Status = styled.div`
    display: flex;
    padding: 0px 12px;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 28px;
`

const CaleTime = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

export function MenuBar(props) {
    const [time, setTime] = useState("XX:XX");
    const [date, setDate] = useState("XX/XX (曜)");

    useEffect(() => {
        /* 省略 */
    }, []);

    return (
        <MenuBarBody>
            <Left>
                <NavButtons>
                    <Back><SVG_arrow_left_12 size={20} /></Back>
                    <Home><SVG_home_12 size={20} /></Home>
                    <Label>
                        <SubTitle>アーカイブ</SubTitle>
                        <Title>Long Naaaaame</Title>
                    </Label>
                </NavButtons>
                <MbContextMenu/>
            </Left>
            <Right>
                <Status>
                    <CaleTime>
                        <Title>{time}</Title>
                        <SubTitle>{date}</SubTitle>
                    </CaleTime>
                </Status>
            </Right>
        </MenuBarBody>
    )
}