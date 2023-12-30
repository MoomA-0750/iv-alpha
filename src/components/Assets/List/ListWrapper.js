import styled from "styled-components";

const Button = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
`;

const TagWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 5px;
`

const Contexts = styled.div`
  display: grid;
  width: calc(100% - 20px);
  padding: 10px;

  > *{
    transition: all 0.3s ease;
  }

  > *:hover{
    scale: 1.05;
  }
`;

export function ListWrapper(props) {
  const gap = props.gap || "15px";
  const borderRadius = props.borderRadius || "20px";

  return (
    <Button>
      <div className="t-BlockTitle-Bolder tC-Text">{props.title}</div>
      <TagWrapper></TagWrapper>
      <Contexts className="bC-BGSub e-Box" style={{gridTemplateColumns: `repeat(${props.column}, 1fr)`, gap: `${gap}`, borderRadius: `${borderRadius}`}}>
        {props.Contexts}
      </Contexts>
    </Button>
  );
}
