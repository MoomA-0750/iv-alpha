import { MenuBar } from '@/components/MenuBar/MenuBar'
import { SideBar } from '../components/SideBar/SideBar'
import Head from 'next/head'
import styled from 'styled-components'
import { BannerSlide } from '@/components/Assets/BannerSlide'

const MainContents = styled.div`
  max-width: 1020px;
  position: relative;
  top: 95px;
  margin: 0 auto;
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
        <div className='wallpaper'></div>
        <MenuBar />
        <SideBar />
        <MainContents>
          <Top>
            <Title>
              <div className='t-Max-Bolder tC-Text'>IdolVerse</div>
              {/* <div className='t-SubMax-Regular tC-TextSub'>あなたの知らない興奮に案内します</div> */}
            </Title>
            <BannerSlide title={"最近の出来事"} />
          </Top>
        </MainContents>
      </main>
    </>
  )
}
