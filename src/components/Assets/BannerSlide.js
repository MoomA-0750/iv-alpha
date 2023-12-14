import Image from 'next/image'
import styled from 'styled-components';

const Banner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`

const Frame = styled.div`
    position: relative;
    min-width: 400px;
    height: 225px;
    border-radius: 20px;
    overflow: hidden;
`

const DarkGradient = styled.div`
    width: 400px;
    height: 225px;
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

const Contexts = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 15px;
    overflow-x: scroll;
    white-space: nowrap;
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

export function BannerSlide(props) {
    return (
        <Banner>
            <div className='t-BlockTitle-Bolder'>{props.title}</div>
            <Contexts>
                <Frame className='e-Button'>
                    <div style={{position: 'relative'}}>
                        <Image style={{position: 'absolute'}}
                            src="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                            width={400}
                            height={225}
                            alt='Artwork'
                        />
                        <DarkGradient style={{position: 'absolute'}} />
                    </div>
                    <TextBox>
                        <div className='t-BlockTitle-Bolder tC-fff e-Context-Highlight'>
                            asdf<br/>記事タイトルほげほげ
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
                </Frame>
                <Frame className='e-Button'>
                    <div style={{position: 'relative'}}>
                        <Image style={{position: 'absolute'}}
                            src="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                            width={400}
                            height={225}
                            alt='Artwork'
                        />
                        <DarkGradient style={{position: 'absolute'}} />
                    </div>
                    <TextBox>
                        <div className='t-BlockTitle-Bolder tC-fff e-Context-Highlight'>
                            asdf<br/>記事タイトルほげほげ
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
                </Frame>
                <Frame className='e-Button'>
                    <div style={{position: 'relative'}}>
                        <Image style={{position: 'absolute'}}
                            src="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                            width={400}
                            height={225}
                            alt='Artwork'
                        />
                        <DarkGradient style={{position: 'absolute'}} />
                    </div>
                    <TextBox>
                        <div className='t-BlockTitle-Bolder tC-fff e-Context-Highlight'>
                            asdf<br/>記事タイトルほげほげ
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
                            <div className='t-SubText2-Normal tC-fff e-Context-Highlight'>6/14（水）</div>
                        </Info>
                    </TextBox>
                </Frame>
                <Frame className='e-Button'>
                    <div style={{position: 'relative'}}>
                        <Image style={{position: 'absolute'}}
                            src="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                            width={400}
                            height={225}
                            alt='Artwork'
                        />
                        <DarkGradient style={{position: 'absolute'}} />
                    </div>
                    <TextBox>
                        <div className='t-BlockTitle-Bolder tC-fff e-Context-Highlight'>
                            asdf<br/>記事タイトルほげほげ
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
                            <div className='t-SubText2-Normal tC-fff e-Context-Highlight'>6/14（水）</div>
                        </Info>
                    </TextBox>
                </Frame>
            </Contexts>
        </Banner>
    )
}