import { useItemsStore } from "../stores/itemsStore";

export default function Counter() {
  const { itemsLength, itemsChecked } = useItemsStore((state) => ({
    itemsLength: state.items.length,
    itemsChecked: state.items.filter((item) => item.packed).length,
  }));

  return (
    <p>
      <strong>{itemsChecked}</strong> / {itemsLength} items packed
    </p>
  );
}
