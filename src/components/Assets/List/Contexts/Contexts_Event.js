import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const FrameLight = styled.div`
    position: relative;
    height: 318px;
    border-radius: 10px 25px 10px 10px;
    display: grid;
    align-items: center;
    gap: 5px;
    overflow: hidden;
    background-color: #ffffff;
`;

const FrameDark = styled.div`
    position: relative;
    height: 318px;
    border-radius: 10px 25px 10px 10px;
    display: grid;
    align-items: center;
    gap: 5px;
    overflow: hidden;
    background-color: #000000;
`;

const InfoCorner = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    height: 30px;
    z-index: 1;
    display: flex;
    flex-direction: row-reverse;
    gap: 5px;

    > *{
        border-radius: 15px;
    }
`

const UserIcon = styled.div`
    position: relative;
    width: 20px;
    border-radius: 20px;
    aspect-ratio: 1 / 1;
    display: grid;
    align-items: center;
    overflow: hidden;
`

const TitleDark = styled.div`
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    padding: 0 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const TitleLight = styled.div`
    position: absolute;
    bottom: 0;
    width: calc(100% - 20px);
    padding: 0 10px 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    > *{
        color: rgba(255, 255, 255, 0.8);
    }
`

const LightText = styled.div`
    color: rgba(255, 255, 255, 0.8);
`
const DarkText = styled.div`
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        -webkit-mask-image: linear-gradient(180deg, rgba(255, 255, 255) 36.98%, rgba(255, 255, 255, 0.24) 70.83%, rgba(255, 255, 255, 0) 83.33%, rgba(255, 255, 255, 0) 100%);
        mask-image: linear-gradient(180deg, rgba(255, 255, 255) 36.98%, rgba(255, 255, 255, 0.24) 70.83%, rgba(255, 255, 255, 0) 83.33%, rgba(255, 255, 255, 0) 100%);
    }
`;

export function Contexts_Event(props) {
    const link = props.link || "/default-link";
    const Frame = props.darkMode ? FrameDark : FrameLight;
    const Title = props.darkMode ? TitleLight : TitleDark;

    return (
        <Link href={link}>
            <Frame className="e-Button">
                <Image style={{filter: `blur(25px)`, opacity:"0.5"}}
                    layout="fill"
                    src={props.image}
                    objectFit="cover"
                    alt=""
                />
                <ImageContainer>
                    <img src={props.image} alt='Picture' />
                </ImageContainer>
                <InfoCorner>
                    <div class="bC-BG e-Box" style={{padding:"5px 10px", display:"flex", gap:"2px", alignItems:"center"}}>
                        <div class="t-SubText2-Bolder">{props.date}</div>
                        <div class="t-SubText2-Light">{props.time}</div>
                    </div>
                    <div class="bC-BG e-Box" style={{padding:"5px 10px 5px 5px", display:"flex", gap:"5px", alignItems:"center"}}>
                        <UserIcon className="e-Button">
                            <Image style={{objectFit: "cover"}}
                                src={props.userIcon}
                                layout="fill"
                                alt='Artwork'
                            />
                        </UserIcon>
                        <div class="t-SubText2-Bolder">{props.userName}</div>
                    </div>
                </InfoCorner>
                <Title>
                    <div class="t-BlockTitle-Bolder">{props.title}</div>
                    <div class="t-Text-Normal">{props.subTitle}</div>
                </Title>
            </Frame>
        </Link>
    );
}