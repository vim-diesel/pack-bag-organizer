import styled from 'styled-components';
import { useEffect, useState } from 'react';

import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import Sidebar from './Sidebar';

const itemsData = [
  { id: 1, label: 'passport', completed: false },
  { id: 2, label: 'phone charger', completed: false },
  { id: 3, label: 'grounded in the body', completed: true },
];

function App() {
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      return JSON.parse(savedItems);
    } else {
      return itemsData;
    }
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const itemsLength = items.length;
  const itemsChecked = items.filter((item) => item.completed).length;

  const handleAddItem = (newItem) => {
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleMarkAllComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, completed: true };
    });
    setItems(newItems);
  };

  const handleMarkAllIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, completed: false };
    });
    setItems(newItems);
  };

  const handleReset = () => {
    setItems(itemsData);
  };

  return (
    <>
      <BackgroundHeading />

      <StyledMain>
        <Header itemsLength={itemsLength} itemsChecked={itemsChecked} />
        <ItemList
          items={items}
          handleDeleteItem={handleDeleteItem}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleMarkAllComplete={handleMarkAllComplete}
          handleMarkAllIncomplete={handleMarkAllIncomplete}
          handleReset={handleReset}
        />
      </StyledMain>

      <Footer />
    </>
  );
}

export default App;

const StyledMain = styled.main`
  width: 972px;
  height: 636px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 7fr 4fr;
  grid-template-rows: 59px 1fr;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
  /* box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; */
`;
