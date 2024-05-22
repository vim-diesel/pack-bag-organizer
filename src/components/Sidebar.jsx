import AddItemForm from './AddItemForm';
import ManageItemButtons from './ManageItemButtons';

// Semantics: wrap these two components in a parent div, but not a section. 
// The sidebar is not a section of the page, but a collection of components, the
// AddItemForm and ManageItemButtons are not semantically the same so they are
// not wrapped in a single section element.

export default function Sidebar() {
  return (
    <div>
      <AddItemForm />
      <ManageItemButtons />
    </div>
  );
}
