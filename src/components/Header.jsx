import styled from 'styled-components';
import Logo from './Logo';
import Counter from './Counter';

export default function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Counter />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  background-color: #fbf5ed;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
`;
