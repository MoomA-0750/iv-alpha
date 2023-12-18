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

    * {
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
    return (
        <Frame className="bC-BG e-Button">
            <div style={{width: '75px', height: '75px'}}>
                <GroupArtwork>
                    <Image
                        src="/DummyAssets/Square/rusk_1024.png"
                        width={45}
                        height={45}
                        alt='Artwork'
                    />
                    <Image className="e-Button"
                        src="/DummyAssets/Square/ama_1024.png"
                        width={60}
                        height={60}
                        alt='Artwork'
                    />
                </GroupArtwork>
            </div>
            <TextBox>
                <div className="t-Text-Bolder">Group Name</div>
                <div className="t-SubText-Normal tC-TextSub">Theme</div>
                <div className="t-SubText-Normal tC-TextSub">Num of Followers</div>
            </TextBox>
        </Frame>
    );
}
