import styled from 'styled-components';
import Button from './Button';
import { useRef, useState } from 'react';

export default function AddItemForm({ addItem }) {
  const [itemToAdd, setItemToAdd] = useState('');

  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemToAdd) {
      inputRef.current.focus();
      return;
    }

    addItem(itemToAdd);

    setItemToAdd('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ItemFormHeading>Add Item</ItemFormHeading>
      <ItemFormInput
        type='text'
        placeholder='...'
        value={itemToAdd}
        ref={inputRef}
        onChange={(e) => setItemToAdd(e.target.value)}
      />
      <Button type='submit'>Add to list</Button>
    </form>
  );
}

const ItemFormInput = styled.input`
  height: 45px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  margin: 12px 0 8px 0;
  padding: 0 16px;
  font-size: 0.875rem;

  &::placeholder {
    font-style: italic;
  }
`;

const ItemFormHeading = styled.h2`
  color: #231d15;
  font-size: 16px;
  font-weight: 500;
`;
