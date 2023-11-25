import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { SVG_arrow_left_12, SVG_home_12 } from '../IconPack'

const MenuBarBody = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: space-between;
align-items: center;
`

const Left = styled.div`
display: flex;
align-items: center;
gap: 10px;
align-self: stretch;
`

const NavButtons = styled.div`
display: flex;
padding: 4px;
align-items: center;
gap: 6px;
align-self: stretch;
border-radius: 34px;
`

const Back = styled.div`
display: flex;
width: 42px;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;
border-radius: 28px 5px 5px 28px;
`

const Home = styled.div`
display: flex;
width: 42px;
justify-content: center;
align-items: center;
gap: 10px;
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

export function MbContextMenu(props) {
    return (
        <MenuBarBody>
            <Left>
                <NavButtons className='bC-BGSub e-Box'>
                    <Back className='bC-BG e-Button'><SVG_arrow_left_12 size={20} /></Back>
                    <Home className='bC-BG e-Button'><SVG_home_12 size={20} /></Home>
                    <Label className='bC-BG'>
                        <SubTitle className='t-SubText-Normal tC-TextSub'>アーカイブ</SubTitle>
                        <Title className='t-Text-Bolder tC-Text'>Long Naaaaame</Title>
                    </Label>
                </NavButtons>
            </Left>
        </MenuBarBody>
    )
}