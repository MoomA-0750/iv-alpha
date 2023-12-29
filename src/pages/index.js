import { MenuBar } from '@/components/MenuBar/MenuBar'
import { SideBar } from '@/components/SideBar/SideBar'
import Head from 'next/head'
import styled from 'styled-components'
import { BannerSlide } from '@/components/Assets/Banner/BannerSlide'
import { ListWrapper } from '@/components/Assets/List/ListWrapper'
import { Contexts_Def } from '@/components/Assets/List/Contexts/Contexts_Def'
import { SVG_book, SVG_calendar, SVG_guide_board } from '@/components/IconPack'

const MainContents = styled.div`
  max-width: 1020px;
  position: relative;
  top: 95px;
  margin: 0 auto;

  @media (max-width: 1260px) {
    margin-left: 120px;
  }
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const Title = styled.div`
  margin-right: auto;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>ホーム - IdolVerse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='wallpaper'/>
        <SideBar />
        <MenuBar title={"ホーム"} />
        <MainContents>
          <Top>
            <Title>
              <div className='t-Max-Bolder'>IdolVerse</div>
              <div className='t-SubMax-Regular tC-TextSub'>Working in Progress...</div>
            </Title>
            <BannerSlide title={"最近の出来事"} />
            <ListWrapper
              title={"クイックアクセス"}
              column={"3"}
              Contexts={
                <>
                  <Contexts_Def
                    svg={<SVG_calendar size={30} />}
                    title={"予定を見る"}
                    subTitle={"イベントカレンダー"}
                  />
                  <Contexts_Def
                    svg={<SVG_guide_board size={30} />}
                    title={"交流する"}
                    subTitle={"コミュニティ"}
                  />
                  <Contexts_Def
                    link={"/archives/mainlist"}
                    svg={<SVG_book size={30} />}
                    title={"過去を振りかえる"}
                    subTitle={"アーカイブ"}
                  />
                </>
              }
            />
          </Top>
        </MainContents>
      </main>
    </>
  )
}
