import styled from 'styled-components';
import Button from './Button';

export default function ManageItemButtons({
  handleRemoveAllItems,
  handleMarkAllComplete,
  handleMarkAllIncomplete,
  handleReset,
}) {
  return (
    <StyledButtonGroup>
      <Button type='secondary' onClick={handleMarkAllComplete}>
        Mark all complete
      </Button>
      <Button type='secondary' onclick={handleMarkAllIncomplete}>
        Mark all incomplete
      </Button>
      <Button type='secondary' onClick={handleReset}>
        Reset
      </Button>
      <Button type='secondary' onClick={handleRemoveAllItems}>
        Remove all
      </Button>
    </StyledButtonGroup>
  );
}

const StyledButtonGroup = styled.section`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
