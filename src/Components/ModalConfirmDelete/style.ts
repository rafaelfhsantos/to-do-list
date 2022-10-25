import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalMaterial = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding-bottom: 10px;
  border: none;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;

  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 0;
      opacity: 1;
    }
  }
`;

export const ModalLock = styled.span`
  color: white;
  font-size: 28px;
  font-weight: bold;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalTitle = styled.div`
  margin-bottom: 10px;
  padding: 5px 16px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #333;
  color: white;
  @media (min-width: 720px) {
    align-items: center;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 2px 16px;
`;

export const YesButton = styled.button`
  color: white;
  font-size: 18px;
  background-color: #338;
  border-radius: 5px;
  padding: 10px 10px;
  border: none;
  &:hover {
    cursor: pointer;
    color: darkblue;
    background-color: white;
    border: 1px solid darkblue;
  }
`;

export const NoButton = styled.div`
  color: white;
  font-size: 18px;
  background-color: orange;
  border-radius: 5px;
  padding: 10px 10px;
  border: none;
  &:hover {
    cursor: pointer;
    color: orange;
    background-color: white;
    border: 1px solid orange;
  }
`;

export const SpanContact = styled.span`
  color: #000;
`;

export const Input = styled.input`
  height: 40px;
  font-size: 18px;
  padding: 5px;
`;

export const DivSaveCancel = styled.div`
  padding: 30px 0 20px 0;
  display: flex;
  justify-content: space-around;
`;
