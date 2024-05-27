import { useItemsStore } from '../stores/itemsStore';
import AddItemForm from './AddItemForm';
import ManageItemButtons from './ManageItemButtons';
import styled from 'styled-components';

// Semantics: wrap these two components in a parent div, but not a section.
// The sidebar is not a section of the page, but a collection of components, the
// AddItemForm and ManageItemButtons are not semantically the same so they are
// not wrapped in a single section element.

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <SidebarWrapper>
      <AddItemForm addItem={addItem} />
      <ManageItemButtons />
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: #fffcf9;
  border-left: 1px solid rgba(0, 0, 0, 0.07);
  padding: 18px 25px 28px;
  display: flex;
  flex-direction: column;
`;
