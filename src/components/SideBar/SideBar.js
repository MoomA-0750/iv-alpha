import styled from 'styled-components';
import { SVG_search_24, SVG_people_checkmark_24, SVG_calendar_24, SVG_people_community_24, SVG_book } from '../IconPack';

const SideBarBody = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    height: 100%;
    margin: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const ContextMenu = styled.div`
    display: flex;
    width: 80px;
    padding: 10px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
`

const Context = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Label = styled.div`
    text-align: center;
`

export function SideBar() {
    return (
        <SideBarBody>
            <ContextMenu className='bC-BGSub e-Box'>
                <Context className='bC-BG e-Button'>
                    <SVG_search_24 size={30} />
                    <Label className='tC-Text t-10pxNormal'>検索</Label>
                </Context>
                <Context className='bC-BG e-Button'>
                    <SVG_people_checkmark_24 size={30} />
                    <Label className='tC-Text t-10pxNormal'>フォロー中</Label>
                </Context>
            </ContextMenu>
            <ContextMenu className='bC-BGSub e-Box'>
                <Context className='bC-BG e-Button'>
                    <SVG_calendar_24 size={30} />
                    <Label className='tC-Text t-10pxNormal'>イベント<br/>カレンダー</Label>
                </Context>
                <Context className='bC-BG e-Button'>
                    <SVG_people_community_24 size={30} />
                    <Label className='tC-Text t-10pxNormal'>コミュニティ</Label>
                </Context>
                <Context className='bC-BG e-Button'>
                    <SVG_book size={30} />
                    <Label className='tC-Text t-10pxNormal'>アーカイブ</Label>
                </Context>
            </ContextMenu>
        </SideBarBody>
    );
}