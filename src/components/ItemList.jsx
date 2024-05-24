import styled from 'styled-components';

import EmptyView from './EmptyView';

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  return items.length === 0 ? (
    <EmptyView />
  ) : (
    <StyledList>
      {items.map((item) => (
        <Item
          key={item.id}
          itemId={item.id}
          label={item.label}
          checked={item.completed}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
      ))}
    </StyledList>
  );
}

function Item({ label, itemId, checked, handleDeleteItem, handleToggleItem }) {
  return (
    <StyledListItem>
      <label>
        <input
          type='checkbox'
          checked={checked}
          onChange={() => handleToggleItem(itemId)}
        />{' '}
        {label}
      </label>

      <button onClick={() => handleDeleteItem(itemId)}>❌</button>
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
  font-size: 0.875rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  label > input {
    height: 15px;
    width: 15px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border: 1px solid #d3d3d3;
    border-radius: 2px;
    outline: 2px solid transparent;
    transition-duration: 0.3s;
    background-color: #fff;
    cursor: pointer;
    margin-right: 13px;
    box-sizing: content-box;
  }

  label > input:hover {
    border-color: #8f8474;
  }

  label > input:checked {
    border-color: #6e6251;
    background-color: #6e6251;
  }

  label {
    cursor: pointer;
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 28px;
  }

  button {
    font-size: 0.8125rem;
    text-transform: uppercase;
    position: absolute;
    right: 28px;
    top: 0;
    color: #231d15;
    height: 100%;
    transition: all 0.1s;
  }

  button:hover,
  button:focus {
    transform: scale(1.2);
  }
`;
