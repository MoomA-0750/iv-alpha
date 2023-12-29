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
    position: relative;
    width: 16px;
    border-radius: 20px;
    aspect-ratio: 1 / 1;
    display: grid;
    align-items: center;
    overflow: hidden;
`

export function BContexts_Def(props) {
    return (
        <Frame>
            <FrameRel className='e-Button'>
                <div style={{position: 'relative', height:"100%"}}>
                    <Image style={{position: 'absolute', objectFit: "cover"}}
                        layout="fill"
                        src={props.image}
                        alt='Artwork'
                    />
                    <DarkGradient/>
                </div>
                <TextBox>
                    <div className='t-BlockTitle-Bolder tC-fff e-Context-Highlight'>
                        {props.title}
                    </div>
                    <Info>
                        <UserInfo>
                            <UserIcon>
                                <Image style={{objectFit: "cover"}}
                                    src={props.userIcon}
                                    layout="fill"
                                    alt='Artwork'
                                />
                            </UserIcon>
                            <div className='t-SubText2-Normal tC-fff e-Context-Highlight'>{props.userName}</div>
                        </UserInfo>
                        <Dot className='bC-BGSub'></Dot>
                        <div className='t-SubText2-Normal tC-fff e-Context-Highlight'>{props.date}</div>
                    </Info>
                </TextBox>
            </FrameRel>
        </Frame>
    )
}