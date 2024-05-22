import styled from 'styled-components';
import Button from './Button';

export default function ManageItemButtons() {
  return (
    <StyledButtonGroup>
      <Button>Pack</Button>
      <Button>Remove</Button>
    </StyledButtonGroup>
  );
}

const StyledButtonGroup = styled.section`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
