import Link from 'next/link';
import Router from 'next/router'
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SVG_arrow_left_12, SVG_home_12 } from '@/components/IconPack';

const MenuBarBody = styled.div`
    position: fixed;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    width: calc(100vw - 30px);
    height: 50px;
    margin: 15px;
    column-gap: 10px;
    grid-auto-columns: minmax(0, auto);
    grid-auto-rows: minmax(50px, 50px);
    z-index: 100;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    z-index: 1;
`

const Center = styled.div`
    position: relative;
    display: flex;
    align-self: stretch;
    overflow: visible;
`

const Spacer = styled.div`
    position: absolute;
    width: 100%;
    top: -5px;
    left: -35px;
    padding: 5px 35px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    align-self: stretch;
    overflow-x: scroll;
`

const NavButtons = styled.div`
    display: flex;
    padding: 4px;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 34px;

    a {
        height: 100%;
    }
`

const Back = styled.div`
    display: flex;
    width: 42px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 28px 5px 5px 28px;
`

const Home = styled.div`
    display: flex;
    width: 42px;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 5px 28px 28px 5px;
`

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
`

const Title = styled.div`
`

const Right = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 4px;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 28px;
    z-index: 1;
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
        const intervalId = setInterval(() => {
            const now = new Date();
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];
            setTime(hours + ':' + minutes);
            setDate(month + '/' + day + ' (' + dayOfWeek + ')');
        }, 1000); // 1秒ごとに更新

        // コンポーネントのクリーンアップ時にintervalをクリアする
        return () => clearInterval(intervalId);
    }, []);

    return (
        <MenuBarBody>
            <Left>
                <NavButtons className='bC-BGSub e-Box'>
                    <Back onClick={() => Router.back()} className='bC-BG e-Button'><SVG_arrow_left_12 size={20} /></Back>
                    <Link href={"/"}>
                        <Home className='bC-BG e-Button'><SVG_home_12 size={20} /></Home>
                    </Link>
                    <Label className='bC-BG'>
                        <SubTitle className='t-SubText-Normal tC-TextSub'>{props.subtitle}</SubTitle>
                        <Title className='t-Text-Bolder'>{props.title}</Title>
                    </Label>
                </NavButtons>
            </Left>
            <Center>
                <Spacer>
                    {props.contexts}
                </Spacer>
            </Center>
            <Right className='bC-BGSub e-Box'>
                <Status className='bC-BG e-Button'>
                    <CaleTime>
                        <Title className='t-Text-Bolder'>{time}</Title>
                        <SubTitle className='t-SubText-Normal tC-TextSub'>{date}</SubTitle>
                    </CaleTime>
                </Status>
                {props.right}
            </Right>
        </MenuBarBody>
    )
}