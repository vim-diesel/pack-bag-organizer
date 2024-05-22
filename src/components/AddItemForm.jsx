import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';

export default function AddItemForm() {
  const [itemToAdd, setItemToAdd] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Item added');
      }}
    >
      <ItemFormHeading>Add Item</ItemFormHeading>
      <ItemFormInput
        type='text'
        placeholder='...'
        value={itemToAdd}
        onChange={(e) => setItemToAdd(e.target.value)}
      />
      <Button>Add to list</Button>
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
