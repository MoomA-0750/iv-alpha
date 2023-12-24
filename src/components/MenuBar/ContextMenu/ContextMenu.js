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

const LabelShow = styled.div`
    padding: 0 6px;
`

const LabelHidden = styled.div`
    display: none;
`

export function MbContextMenu(props) {
    const Label = !props.label ? LabelHidden : LabelShow;

    return (
        <ContextMenu className='bC-BGSub e-Box'>
            <Label>
                <div className='t-SubText2-Normal tC-TextSub'>{props.label}</div>
            </Label>
            {props.contexts}
        </ContextMenu>
    )
}