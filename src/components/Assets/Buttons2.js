import Link from "next/link";
import styled from "styled-components";
import { SVG_calendar, SVG_guide_board, SVG_book } from "@/components/IconPack";

const Button = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const Frame = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

const TextBox = styled.div`
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 5px;
  z-index: 2;
`;

const Contexts = styled.div`
  display: flex;
  width: calc(100% - 20px);
  align-items: flex-start;
  gap: 15px;
  overflow-x: scroll;
  white-space: nowrap;
  border-radius: 20px;
  padding: 10px;
`;

export function Buttons2(props) {
  return (
    <Button>
      <div className="t-BlockTitle-Bolder tC-Text">{props.title}</div>
      <Contexts className="bC-BGSub e-Box">
        <Frame className="bC-BG e-Button">
          <SVG_calendar size={30} />
          <TextBox>
            <div className="t-Text-Bolder">予定を見る</div>
            <div className="t-SubText-Normal tC-TextSub">
              イベントカレンダー
            </div>
          </TextBox>
        </Frame>
        <Frame className="bC-BG e-Button">
          <SVG_guide_board size={30} />
          <TextBox>
            <div className="t-Text-Bolder">交流する</div>
            <div className="t-SubText-Normal tC-TextSub">コミュニティ</div>
          </TextBox>
        </Frame>
        <Frame className="bC-BG e-Button">
          <SVG_book size={30} />
          <TextBox>
            <div className="t-Text-Bolder">過去を振りかえる</div>
            <div className="t-SubText-Normal tC-TextSub">アーカイブ</div>
          </TextBox>
        </Frame>
      </Contexts>
    </Button>
  );
}
