import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const MediaControl = styled.div`
    display: flex;
    padding: 0px 12px;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 28px;
`

const MediaInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`

const SubTitle = styled.div`
    /* ここにsubTitleのCSSを記述 */
`

const Title = styled.div`
    /* ここにtitleのCSSを記述 */
`

export function MbMediaControl() {
    return (
        <MediaControl className='bC-BG e-Button'>
            <MediaInfo>
                <Title className='t-Text-Bolder tC-Text'>Media Title</Title>
                <SubTitle className='t-SubText-Normal tC-TextSub'>Artists</SubTitle>
            </MediaInfo>
        </MediaControl>
    )
}