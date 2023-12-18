import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Frame = styled.div`
    height: 90px;
    padding: 5px 5px 5px 10px;
    display: grid;
    grid-template-columns: max-content 1fr;
    align-items: center;
    gap: 5px;
    border-radius: 10px;
    overflow: hidden;
`;

const GroupArtwork = styled.div`
    position: relative;
    height: 75px;

    * {
        border-radius: 30px;
        position: absolute;
        overflow: hidden;
    }

    & :nth-child(1) {
        top: 0;
        left: 0;
        opacity: 0.5;
    }

    & :nth-child(2) {
        top: 15px;
        left: 15px;
    }
`;

const UserArtwork = styled.div`
    position: relative;
    height: 75px;

    & :nth-child(1) {
        display: none;
    }

    & :nth-child(2) {
        border-radius: 30px;
        position: absolute;
        overflow: hidden;
        top: 7.5px;
        left: 7.5px;
    }
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2px;
`;

export function Contexts_User(props) {
    const Artwork = props.userType === 'Group' ? GroupArtwork : UserArtwork;
    const link = props.link || "/default-link";

    return (
        <Link href={link}>
            <Frame className="bC-BG e-Button">
                <div style={{width: '75px', height: '75px'}}>
                    <Artwork>
                        <Image
                            src={props.subImage}
                            width={45}
                            height={45}
                            alt='Artwork'
                        />
                        <Image className="e-Button"
                            src={props.image}
                            width={60}
                            height={60}
                            alt='Artwork'
                        />
                    </Artwork>
                </div>
                <TextBox>
                    <div className="t-Text-Bolder">{props.title}</div>
                    <div className="t-SubText-Normal tC-TextSub">{props.theme}</div>
                    <div className="t-SubText-Normal tC-TextSub">{props.followersCount}</div>
                </TextBox>
            </Frame>
        </Link>
    );
}