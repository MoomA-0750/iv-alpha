import styled from 'styled-components';

const SideBarBody = styled.div`
    position: fixed;
    display: flex;
    width: 120px;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const ContextMenu = styled.div`
`

const Context = styled.div`
`

export function SideBar() {
    <SideBarBody>
        <ContextMenu className='bC-BGSub e-Box'>
            <Context className='bC-BG e-Button'></Context>
        </ContextMenu>
    </SideBarBody>
}