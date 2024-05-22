import styled from 'styled-components';

const Items = [
  { id: 1, label: 'passport', completed: false },
  { id: 2, label: 'phone charger', completed: false },
  { id: 3, label: 'grounded in the body', completed: false },
];

export default function ItemList() {
  return (
    <StyledList>
      {Items.map((item) => (
        <Item key={item.id} label={item.label} />
      ))}
    </StyledList>
  );
}

function Item({ label }) {
  return (
    <StyledListItem>
      <label>
        <input type='checkbox' />
        {label}
      </label>
    </StyledListItem>
  );
}

const StyledList = styled.ul`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background-color: #fff;
  overflow-y: scroll;
  scrollbar-color: red orange;
  scrollbar-width: thin;
  position: relative;
`;

const StyledListItem = styled.li`
  display: flex;
  position: relative;
  height: 50px;
  font-size: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;
