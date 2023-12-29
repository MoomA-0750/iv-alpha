import styled from 'styled-components';
import { BContexts_Def } from './Contexts/BContexts_Def';

const Banner = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`

const Contexts = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 15px;
    overflow-x: scroll;
    white-space: nowrap;
`

export function BannerSlide(props) {
    return (
        <Banner>
            <div className='t-BlockTitle-Bolder'>{props.title}</div>
            <Contexts>
                <BContexts_Def
                    image="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                    title={<>asdf<br/>記事タイトルほげほげ</>}
                    userIcon="/DummyAssets/Square/ama_1024.png"
                    userName="User Name"
                    date="6/14 (水)"
                />
                <BContexts_Def
                    image="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                    title={<>asdf<br/>記事タイトルほげほげ</>}
                    userIcon="/DummyAssets/Square/ama_1024.png"
                    userName="User Name"
                    date="6/14 (水)"
                />
                <BContexts_Def
                    image="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                    title={<>asdf<br/>記事タイトルほげほげ</>}
                    userIcon="/DummyAssets/Square/ama_1024.png"
                    userName="User Name"
                    date="6/14 (水)"
                />
                <BContexts_Def
                    image="/DummyAssets/f61b07f3908bff741f3bc946eda24bd2.png"
                    title={<>asdf<br/>記事タイトルほげほげ</>}
                    userIcon="/DummyAssets/Square/ama_1024.png"
                    userName="User Name"
                    date="6/14 (水)"
                />
            </Contexts>
        </Banner>
    )
}