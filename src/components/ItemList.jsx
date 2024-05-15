import styled from 'styled-components';

export default function ItemList() {
  return (
    <StyledItemList>
      <li>Item 1</li>
      <li>Item 2</li>
    </StyledItemList>
  );
}

const StyledItemList = styled.ul`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: #fff;
  overflow-y: scroll;
  scrollbar-color: red orange;
  scrollbar-width: thin;
  position: relative;
`;
