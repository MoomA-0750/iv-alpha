import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { SVG_calendar, SVG_guide_board, SVG_book } from "@/components/IconPack";

const Button = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
`;

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
// const Frame = styled.div`
//   height: 90px;
//   padding: 5px 5px 5px 10px;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   border-radius: 10px;
//   overflow: hidden;
// `;

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
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2px;

  * {
    /* text-wrap: wrap; */
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;

const Contexts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: calc(100% - 20px);
  gap: 15px;
  overflow-x: scroll;
  border-radius: 20px;
  padding: 10px;
`;

export function Buttons2(props) {
  return (
    <Button>
      <div className="t-BlockTitle-Bolder tC-Text">{props.title}</div>
      <Contexts className="bC-BGSub e-Box">
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
        <Frame className="bC-BG e-Button">
          <div style={{width: '75px', height: '75px'}}>
            <UserArtwork>
              <Image className="e-Button"
                src="/DummyAssets/Square/ama_1024.png"
                width={60}
                height={60}
                alt='Artwork'
              />
            </UserArtwork>
          </div>
          <TextBox>
            <div className="t-Text-Bolder">Group Name</div>
            <div className="t-SubText-Normal tC-TextSub">Theme</div>
            <div className="t-SubText-Normal tC-TextSub">Num of Followers</div>
          </TextBox>
        </Frame>
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
            <div className="t-Text-Bolder">Looooooooooooooooooooooong Group Name</div>
            <div className="t-SubText-Normal tC-TextSub">Theme</div>
            <div className="t-SubText-Normal tC-TextSub">Num of Followers</div>
          </TextBox>
        </Frame>
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
      </Contexts>
    </Button>
  );
}
