import styled from 'styled-components';

export default function Button({ buttonType, children }) {
  return <StyledButton buttonType={buttonType}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  height: 45px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #473a2b;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
`;
