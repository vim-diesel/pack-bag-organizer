import styled from 'styled-components';

export default function AddItemForm() {
  return (
    <form>
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
