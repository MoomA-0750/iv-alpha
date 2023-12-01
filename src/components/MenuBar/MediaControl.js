import styled from 'styled-components'
import { SVG_Media_Pause, SVG_Media_Forward } from '../IconPack';

const MediaControl = styled.div`
    display: flex;
    padding: 0px 8px 0 12px;
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
`

const Title = styled.div`
`

const Artwork = styled.div`
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

const Back = styled.div`
    border-radius: 30px;
`

const PlayPause = styled.div`
display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 30px;
`

const Forward = styled.div`
    width: 26px;
    height: 26px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border-radius: 30px;
`

export function MbMediaControl() {
    return (
        <MediaControl className='bC-BG e-Button'>
            <MediaInfo>
                <Title className='t-Text-Bolder tC-Text'>Media Title</Title>
                <SubTitle className='t-SubText-Normal tC-TextSub'>Artists</SubTitle>
            </MediaInfo>
            <Artwork>
                {/* <img src='@/DummyAssets/Screenshot 2023-11-29 123542.png'></img> */}
            </Artwork>
            <Buttons>
                <Back className='bC-BG e-Button'>a</Back>
                <PlayPause className='bC-BG e-Button'><SVG_Media_Pause size={14.5}/></PlayPause>
                <Forward className='bC-BG e-Button'><SVG_Media_Forward size={9.75}/></Forward>
            </Buttons>
        </MediaControl>
    )
}