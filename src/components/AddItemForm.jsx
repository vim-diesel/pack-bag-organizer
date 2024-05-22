import styled from 'styled-components';

export default function AddItemForm() {
  return (
    <form>
      <ItemFormHeading>Add Item</ItemFormHeading>
      <ItemFormInput type='text' placeholder='Add item' />
      <button type='submit'>+</button>
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