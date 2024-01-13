import { MbContextMenu_Context } from "@/components/MenuBar/ContextMenu/Context";
import { MbContextMenu } from "@/components/MenuBar/ContextMenu/ContextMenu";
import { MenuBar } from "@/components/MenuBar/MenuBar";
import { Social_Bubble } from "@/components/MenuBar/Social_Bubble";
import { SideBar } from "@/components/SideBar/SideBar";
import Head from "next/head";
import styled from "styled-components";

const MainContents = styled.div`
    position: relative;
    height: calc(100vh - 95px);
    padding-top: 95px;
    margin: 0 auto;
    margin-left: 120px;
`;

const Wallpaper = styled.div`
    position: fixed;
    width: calc(100% + 50px);
    height: calc(100vh + 50px);
    top: -25px;
    left: -25px;
    background-position: center;
    background-size: cover;
    z-index: -100;

    filter: blur(12.5px);
`;

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 20px;
    bottom: 40px;
    gap: 30px;
`

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Archives_User_Log() {
    const image = "/DummyAssets/52e59d9a59265fac16a891cd33b98272.png";

    return (
        <>
        <Head>
            <title>Group Name - ログ</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Wallpaper
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%), url(${image})`,
            }}
            />
            <SideBar />
            <MenuBar
            subtitle={"ログ"}
            title={"Group Naaaaame"}
            contexts={
                <>
                <Social_Bubble />
                <MbContextMenu
                    contexts={
                    <>
                        <MbContextMenu_Context
                        selected={false}
                        text={"トップ"}
                        link={"/archives/users-page/top"}
                        />
                        <MbContextMenu_Context
                        selected={false}
                        text={"ギャラリー"}
                        link={"/archives/users-page/gallery"}
                        />
                        <MbContextMenu_Context
                        selected={false}
                        text={"メンバー"}
                        link={"/archives/users-page/members"}
                        />
                        <MbContextMenu_Context
                        selected={false}
                        text={"イベント"}
                        link={"/archives/users-page/events"}
                        />
                        <MbContextMenu_Context
                        selected={false}
                        text={"リリース"}
                        link={"/archives/users-page/releases"}
                        />
                        <MbContextMenu_Context
                        selected={true}
                        text={"ログ"}
                        link={"/archives/users-page/log"}
                        />
                    </>
                    }
                />
                </>
            }
            right={<>{/* <MbMediaControl/> */}</>}
            />
            <MainContents>
                <TitleBox>
                    <TextBox>
                        <div class="t-FullScreen-Title">Under<br/>Construction...</div>
                    </TextBox>
                </TitleBox>
            </MainContents>
        </main>
        </>
    );
}
