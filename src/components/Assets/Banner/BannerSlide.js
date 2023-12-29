import styled from 'styled-components';

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
                {props.contents}
            </Contexts>
        </Banner>
    )
}