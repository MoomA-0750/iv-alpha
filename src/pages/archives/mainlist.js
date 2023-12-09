import { MenuBar } from '@/components/MenuBar/MenuBar'
import { SideBar } from '@/components/SideBar/SideBar'
import Head from 'next/head'

export default function MainList() {
  return (
    <>
      <Head>
        <title>アーカイブ - IdolVerse</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='wallpaper'></div>
        <MenuBar />
        <SideBar />
      </main>
    </>
  )
}
