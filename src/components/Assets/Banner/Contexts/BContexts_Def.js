import Image from 'next/image'
import styled from 'styled-components';

const Frame = styled.div`
    height: 225px;
    aspect-ratio: 16 / 9;
`

const FrameRel = styled.div`
    position: relative;
    height: 225px;
    aspect-ratio: 16 / 9;
    border-radius: 20px;
    overflow: hidden;
`

const DarkGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 37.5%, rgba(0, 0, 0, 0.70) 100%);
`

const TextBox = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-flex;
    padding: 10px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 5px;
    z-index:2;
`

const Info = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const Dot = styled.div`
    width: 3px;
    height: 3px;
    border-radius: 3px;
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const UserIcon = styled.div`
    width: 16px;
    height: 16px;
    border-radius: 20px;
    overflow: hidden;
`

export function BContexts_Def(props) {
    return (
        <Frame>
            <FrameRel className='e-Button'>
                <div style={{position: 'relative', height:"100%"}}>
                    <Image style={{position: 'absolute', objectFit: "cover"}}
                        layout="fill"
                        src="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                        alt='Artwork'
                    />
                    <DarkGradient/>
                </div>
                <TextBox>
                    <div className='t-BlockTitle-Bolder tC-fff e-Context-Highlight'>
                        asdf<br/>記事タイトルほげほげa
                    </div>
                    <Info>
                        <UserInfo>
                            <UserIcon>
                            <div style={{position: 'relative'}}>
                                <Image style={{position: 'absolute', left: '-5px'}}
                                    src="/DummyAssets/112a843d79954b04cfbb8b38530639a5.png"
                                    width={42.667}
                                    height={24}
                                    alt='Artwork'
                                />
                                <DarkGradient style={{position: 'absolute'}} />
                            </div>
                            </UserIcon>
                            <div className='t-SubText2-Normal tC-fff e-Context-Highlight'>User Name</div>
                        </UserInfo>
                        <Dot className='bC-BGSub'></Dot>
                        <div className='t-SubText2-Normal tC-fff e-Context-Highlight'>6/14 (水)</div>
                    </Info>
                </TextBox>
            </FrameRel>
        </Frame>
    )
}