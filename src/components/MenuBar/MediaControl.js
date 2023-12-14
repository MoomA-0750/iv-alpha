import Image from 'next/image'
import styled from 'styled-components'
import { SVG_Media_Back, SVG_Media_Pause, SVG_Media_Forward } from '../IconPack';

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
    width: 30px;
    height: 30px;
    border-radius: 2px;
    overflow: hidden;
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

const Back = styled.div`
    display: flex;
    width: 26px;
    height: 26px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`

const PlayPause = styled.div`
    display: flex;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`

const Forward = styled.div`
    display: flex;
    width: 26px;
    height: 26px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`

export function MbMediaControl() {
    return (
        <MediaControl className='bC-BG e-Button'>
            <MediaInfo>
                <Title className='t-Text-Bolder'>Media Title</Title>
                <SubTitle className='t-SubText-Normal tC-TextSub'>Artists</SubTitle>
            </MediaInfo>
            <Artwork>
                <div style={{position: 'relative'}}>
                    <Image style={{position: 'absolute', top: '-14px', left: '-6px'}}
                        src="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                        width={79.688}
                        height={45}
                        alt='Artwork'
                    />
                </div>
            </Artwork>
            <Buttons>
                <Back className='bC-BG e-Button'><SVG_Media_Back size={9.75}/></Back>
                <PlayPause className='bC-BG e-Button'><SVG_Media_Pause size={14.5}/></PlayPause>
                <Forward className='bC-BG e-Button'><SVG_Media_Forward size={9.75}/></Forward>
            </Buttons>
        </MediaControl>
    )
}