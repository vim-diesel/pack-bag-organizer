import styled from 'styled-components';

export default function ManageItemButtons() {
  return (
    <StyledButtonGroup>
      <button type='button'>Pack</button>
      <button type='button'>Remove</button>
    </StyledButtonGroup>
  );
}

const StyledButtonGroup = styled.section`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
