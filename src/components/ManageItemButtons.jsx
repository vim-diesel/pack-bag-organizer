import styled from 'styled-components';
import Button from './Button';

export default function ManageItemButtons() {
  return (
    <StyledButtonGroup>
      <Button buttonType='secondary'>Mark all complete</Button>
      <Button buttonType='secondary'>Mark all incomplete</Button>
      <Button buttonType='secondary'>Reset</Button>
      <Button buttonType='secondary'>Remove all</Button>
    </StyledButtonGroup>
  );
}

const StyledButtonGroup = styled.section`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
