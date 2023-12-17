import styled from 'styled-components'

const ContextMenu = styled.div`
    display: flex;
    flex-shrink: 0;
    margin: 4px 0;
    padding: 0 6px;
    align-items: center;
    align-self: stretch;
    border-radius: 34px;
    max-height: 42px;
`

const Label = styled.div`
padding: 0 6px;
`

const Context = styled.div`
padding: 0 14px;
display: flex;
height: 50px;
padding: 0 14px;

justify-content: center;
align-items: center;
border-radius: 50px;
`

export function MbContextMenu() {
    return (
        <ContextMenu className='bC-BGSub e-Box'>
            <Label>
                <div className='t-SubText2-Normal tC-TextSub'>表示方法</div>
            </Label>
            <Context className='bC-BG e-Button'>トップ</Context>
            <Context>ギャラリー</Context>
            <Context>メンバー</Context>
            <Context>イベント</Context>
            <Context>リリース</Context>
            <Context>ログ</Context>
        </ContextMenu>
    )
}