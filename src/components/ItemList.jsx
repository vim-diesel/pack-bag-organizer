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
    <StyledItem>
      <input type="checkbox" />
      <span>{children}</span>
    </StyledItem>
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

const StyledItem = styled.li`
  display: flex;
  position: relative;
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;