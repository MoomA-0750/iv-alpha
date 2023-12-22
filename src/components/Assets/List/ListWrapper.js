import styled from "styled-components";

const Button = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
`;

const Contexts = styled.div`
  display: grid;
  width: calc(100% - 20px);
  border-radius: 20px;
  padding: 10px;
`;

export function ListWrapper(props) {
  const gap = props.gap || "15px";

  return (
    <Button>
      <div className="t-BlockTitle-Bolder tC-Text">{props.title}</div>
      <Contexts className="bC-BGSub e-Box" style={{gridTemplateColumns: `repeat(${props.column}, 1fr)`, gap: `${gap}`}}>
        {props.Contexts}
      </Contexts>
    </Button>
  );
}
