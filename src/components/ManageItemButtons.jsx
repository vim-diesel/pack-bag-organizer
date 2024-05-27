import styled from 'styled-components';
import Button from './Button';
import { useItemsStore } from '../stores/itemsStore';

export default function ManageItemButtons() {
  const markAllComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllIncomplete = useItemsStore((state) => state.markAllAsIncomplete);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <StyledButtonGroup>
      <Button type='secondary' onClick={markAllComplete}>
        Mark all complete
      </Button>
      <Button type='secondary' onClick={markAllIncomplete}>
        Mark all incomplete
      </Button>
      <Button type='secondary' onClick={resetToInitial}>
        Reset
      </Button>
      <Button type='secondary' onClick={removeAllItems}>
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
