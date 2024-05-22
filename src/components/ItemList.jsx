import styled from 'styled-components';

export default function ItemList() {
  return (
    <StyledItemList>
      <Item>passport</Item>
      <Item>phone charger</Item>
      <Item>grounded in the body</Item>
    </StyledItemList>
  );
}

function Item({children}) {
  return (
    <li>
      <input type="checkbox" />
      <span>{children}</span>
    </li>
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
