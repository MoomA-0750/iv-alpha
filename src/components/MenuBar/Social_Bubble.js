import styled from 'styled-components';
import { MbMediaControl } from '@/components/MenuBar/MediaControl';

const Frame = styled.div`
    height: 42px;
    display: flex;
    padding: 4px;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 28px;
    z-index: 1;
    flex-shrink: 0;
`

const Status = styled.div`
    display: flex;
    padding: 0px 12px;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 28px;
`

export function Social_Bubble(props) {
    return (
        <div>
            <Frame className='bC-BGSub e-Box'>
                <Status className='bC-BG e-Button'>
                    <div className='t-Text-Bolder'>time</div>
                </Status>
                <Status className='bC-BG e-Button'>
                    <div className='t-Text-Bolder'>time</div>
                </Status>
            </Frame>
        </div>
    )
}