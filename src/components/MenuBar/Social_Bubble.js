import styled from 'styled-components';
import { SVG_Social_X, SVG_Social_YouTube, SVG_Social_Booth } from '../IconPack';

const Frame = styled.div`
    height: 42px;
    display: flex;
    padding: 4px;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 28px;
    flex-shrink: 0;
`

const Button = styled.div`
    display: flex;
    padding: 0px 12px;
    justify-content: flex-end;
    align-items: center;
    gap: 6px;
    align-self: stretch;
    border-radius: 28px;
`
const ButtonSquare = styled.div`
    display: flex;
    aspect-ratio: 1 / 1;
    border-radius: 28px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
`

export function Social_Bubble(props) {
    return (
        <Frame className='bC-BGSub e-Box'>
            <Button className='bC-BG e-Button t-Text-Bolder'>フォロー</Button>
            <ButtonSquare className='bC-BG e-Button t-Text-Bolder'><SVG_Social_X/></ButtonSquare>
            <ButtonSquare className='bC-BG e-Button t-Text-Bolder'><SVG_Social_YouTube/></ButtonSquare>
            <ButtonSquare className='bC-BG e-Button t-Text-Bolder'><SVG_Social_Booth/></ButtonSquare>
        </Frame>
    )
}