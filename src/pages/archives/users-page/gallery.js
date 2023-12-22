import { Contexts_Picture } from "@/components/Assets/List/Contexts/Contexts_Picture";
import { Contexts_SubColumn } from "@/components/Assets/List/Contexts/Contexts_SubColumn";
import { ListWrapper } from "@/components/Assets/List/ListWrapper";
import { MbContextMenu_Context } from "@/components/MenuBar/ContextMenu/Context";
import { MbContextMenu } from "@/components/MenuBar/ContextMenu/ContextMenu";
import { MenuBar } from "@/components/MenuBar/MenuBar";
import { Social_Bubble } from "@/components/MenuBar/Social_Bubble";
import { SideBar } from "@/components/SideBar/SideBar";
import Head from "next/head";
import styled from "styled-components";

const MainContents = styled.div`
  position: relative;
  top: 95px;
  margin-left: 120px;
  margin-right: 15px;

  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 30px;
`;

const SubColumn = styled.div`
  width: 270px;
`;

const MainColumn = styled.div`
  max-width: 1020px;
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

export default function Archives_User_Gallery() {
  const image = "/DummyAssets/52e59d9a59265fac16a891cd33b98272.png";

  return (
    <>
      <Head>
        <title>Group Name - ギャラリー</title>
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
          subtitle={"アーカイブ"}
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
                      selected={true}
                      text={"ギャラリー"}
                      link={"/archives/users-page/gallery"}
                    />
                    <MbContextMenu_Context
                      selected={false}
                      text={"メンバー"}
                      link={"/archives/users-page/top"}
                    />
                    <MbContextMenu_Context
                      selected={false}
                      text={"イベント"}
                      link={"/archives/users-page/top"}
                    />
                    <MbContextMenu_Context
                      selected={false}
                      text={"リリース"}
                      link={"/archives/users-page/top"}
                    />
                    <MbContextMenu_Context
                      selected={false}
                      text={"ログ"}
                      link={"/archives/users-page/top"}
                    />
                  </>
                }
              />
            </>
          }
          right={<>{/* <MbMediaControl/> */}</>}
        />
        <MainContents>
          <SubColumn>
            <ListWrapper
              title="asdf"
              column="1"
              gap="10px"
              Contexts={
                <>
                  <Contexts_SubColumn
                    title={"予定を見る"}
                    subTitle={"イベントカレンダー"}
                  />
                  <Contexts_SubColumn
                    title={"予定を見る"}
                    subTitle={"イベントカレンダー"}
                  />
                </>
              }
            />
          </SubColumn>
          <MainColumn>
            <ListWrapper
              title="7日以内"
              column="4"
              Contexts={
                <>
                  <Contexts_Picture
                    image={"/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"}
                  />
                  <Contexts_Picture
                    image={"/DummyAssets/52e59d9a59265fac16a891cd33b98272.png"}
                  />
                  <Contexts_Picture
                    image={"/DummyAssets/112a843d79954b04cfbb8b38530639a5.png"}
                  />
                  <Contexts_Picture
                    image={"/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"}
                  />
                  <Contexts_Picture
                    image={"/DummyAssets/52e59d9a59265fac16a891cd33b98272.png"}
                  />
                  <Contexts_Picture
                    image={"/DummyAssets/112a843d79954b04cfbb8b38530639a5.png"}
                  />
                </>
              }
            />
          </MainColumn>
        </MainContents>
      </main>
    </>
  );
}
