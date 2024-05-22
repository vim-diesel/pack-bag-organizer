import styled from 'styled-components';
import Button from './Button';

export default function ManageItemButtons() {
  return (
    <StyledButtonGroup>
      <Button type='secondary'>Mark all complete</Button>
      <Button type='secondary'>Mark all incomplete</Button>
      <Button type='secondary'>Reset</Button>
      <Button type='secondary'>Remove all</Button>
    </StyledButtonGroup>
  );
}

const StyledButtonGroup = styled.section`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
