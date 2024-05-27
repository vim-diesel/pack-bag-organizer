import { useItemsStore } from '../stores/itemsStore';
import styled from 'styled-components';
import Counter from './Counter';
import Logo from './Logo';

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <StyledHeader>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
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
