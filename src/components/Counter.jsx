// import React from 'react'

export default function Counter({ itemsLength, itemsChecked}) {
  return (
    <p>
      <strong>{itemsChecked}</strong> / {itemsLength} items packed
    </p>
  );
}
