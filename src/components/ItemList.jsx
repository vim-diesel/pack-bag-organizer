import styled from 'styled-components';
import { useMemo, useState } from 'react';

import EmptyView from './EmptyView';
import Select from 'react-select';
import { useItemsStore } from '../stores/itemsStore';

const options = [
  { value: 'default', label: 'Sort by Default' },
  { value: 'packed', label: 'Sort by Packed' },
  { value: 'unpacked', label: 'Sort by Unpacked' },
];

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const [selectedOption, setSelectedOption] = useState(options[0]);

  // we use the spread operator to create a new array. sort() method does not
  // return a new array, but mutates the original array. We want to avoid
  // mutating the original array.
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (selectedOption.value === 'packed') {
          return b.packed - a.packed;
        }

        if (selectedOption.value === 'unpacked') {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, selectedOption]
  );

  return (
    <StyledList>
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <StyledSelectSection>
          <Select
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </StyledSelectSection>
      )}

      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          checked={item.packed}
          onDeleteItem={deleteItem}
          onToggleItem={toggleItem}
        />
      ))}
    </StyledList>
  );
}

function Item({ item, checked, onDeleteItem, onToggleItem }) {
  return (
    <StyledListItem>
      <label>
        <input
          type='checkbox'
          checked={checked}
          onChange={() => onToggleItem(item.id)}
        />{' '}
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
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

const StyledSelectSection = styled.section`
  padding: 15px 28px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 0.813rem;
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
