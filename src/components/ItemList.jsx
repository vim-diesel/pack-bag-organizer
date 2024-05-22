import styled from 'styled-components';

const Items = [
  { id: 1, label: 'passport', completed: false },
  { id: 2, label: 'phone charger', completed: false },
  { id: 3, label: 'grounded in the body', completed: false },
];

export default function ItemList() {
  return (
    <StyledItemList>
      {Items.map((item) => (
        <Item key={item.id} label={item.label} />
      ))}
    </StyledItemList>
  );
}

function Item({ label }) {
  return (
    <StyledItem>
      <label>
        <input type='checkbox' />
        {label}
      </label>
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
