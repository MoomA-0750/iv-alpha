import styled from 'styled-components'

const ContextMenu = styled.div`
    display: flex;
    margin: 4px 0;
    padding: 0 6px;
    align-items: center;
    align-self: stretch;
    border-radius: 34px;
`

const Label = styled.div`
padding: 0 6px;
`

const Context = styled.div`
padding: 0 14px;
display: flex;
height: 50px;
padding: var(--Stick-Left, 0px) 14px;

justify-content: center;
align-items: center;
gap: var(--Stick-Left, 0px);
border-radius: 50px;
`

export function MbContextMenu() {
    return (
        <ContextMenu className='bC-BGSub e-Box'>
            <Label>
                <div className='t-SubText2-Normal tC-TextSub'>表示方法</div>
            </Label>
            <Context className='bC-BG e-Box'>トップ</Context>
            <Context>ギャラリー</Context>
            <Context>メンバー</Context>
            <Context>イベント</Context>
            <Context>リリース</Context>
            <Context>ログ</Context>
        </ContextMenu>
    )
}