import Link from "next/link";
import styled from "styled-components";
import { SVG_calendar, SVG_guide_board, SVG_book } from "@/components/IconPack";

const Button = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
`;

const Frame = styled.div`
  height: 60px;
  padding: 0 15px;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 2px;
`;

const Contexts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: calc(100% - 20px);
  gap: 15px;
  border-radius: 20px;
  padding: 10px;
`;

export function Buttons(props) {
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
        <Link href={"/archives/mainlist"}>
        <Frame className="bC-BG e-Button">
          <SVG_book size={30} />
          <TextBox>
            <div className="t-Text-Bolder">過去を振りかえる</div>
            <div className="t-SubText-Normal tC-TextSub">アーカイブ</div>
          </TextBox>
        </Frame>
        </Link>
      </Contexts>
    </Button>
  );
}