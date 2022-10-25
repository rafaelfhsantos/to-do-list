import styled from "styled-components";

export const TaskDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 700px;
  background-color: #333;
  margin-bottom: 5px;
  padding: 5px 20px;
`;

export const DivInputCheckName = styled.div`
  display: flex;
  align-items: center;
`;

export const InputCheck = styled.input`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const SpanTaskName = styled.span<{ isDone: boolean }>`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "none")};
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 20ch;
  @media (min-width: 720px) {
    max-width: 30ch;
  }
`;

export const DivEditButtons = styled.div`
  display: flex;
`;

export const EditButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 18px;
  margin-right: 5px;
`;
