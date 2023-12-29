    import Link from 'next/link';
import styled from 'styled-components';
import { SVG_search_24, SVG_people_checkmark_24, SVG_calendar, SVG_people_community_24, SVG_book } from '../IconPack';
import { ListWrapper } from '../Assets/List/ListWrapper';
import { Contexts_SideBar } from './Contexts_SideBar';

const SideBarBody = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 80px;
    height: 100%;
    margin: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 100;
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
            <ListWrapper
                column="1"
                gap="10px"
                Contexts={
                    <>
                        <Contexts_SideBar
                            svg={<SVG_search_24 size={30} />}
                            label={"検索"}
                        />
                        <Contexts_SideBar
                            svg={<SVG_people_checkmark_24 size={30} />}
                            label={"フォロー中"}
                        />
                    </>
                }
            />
            <ListWrapper
                column="1"
                gap="10px"
                Contexts={
                    <>
                        <Contexts_SideBar
                            svg={<SVG_calendar size={30} />}
                            label={<><span>イベント</span><br/><span>カレンダー</span></>}
                        />
                        <Contexts_SideBar
                            svg={<SVG_people_community_24 size={30} />}
                            label={"コミュニティ"}
                        />
                        <Contexts_SideBar
                            svg={<SVG_book size={30} />}
                            label={"アーカイブ"}
                            link={"/archives/mainlist"}
                        />
                        </>
                    }
            />
        </SideBarBody>
    );
}