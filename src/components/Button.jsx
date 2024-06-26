import styled from 'styled-components';

export default function Button({ onClick, type, children }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  height: 45px;
  width: 100%;
  border: none;
  border-radius: 5px;
  background-color: #473a2b;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;

  &:hover {
    background-color: #322618;
  }

  opacity: ${(props) => (props.type === 'secondary' ? '0.85' : '')};
  font-size: ${(props) => (props.type === 'secondary' ? '0.875rem' : '')};
`;
