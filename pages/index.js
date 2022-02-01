import React, { useState } from 'react';
import { useCombobox } from 'downshift';

const items = [
  'Apples',
  'Applesaft',
  'Apple juice',
  'Apple pie',
  'Apple jam',
  'Apple sauce',
];

const Home = () => {
  const [inputItems, setItems] = useState(items);

  const { isOpen, getComboboxProps, getInputProps, getMenuProps, getItemProps, getLabelProps } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) =>
      setItems(items.filter((item) => item.toLowerCase().startsWith(inputValue?.toLowerCase() ?? ''))),
    stateReducer: (state, changes) => {
      console.debug({ state, changes })
      return changes.changes
    }
  });

  return (
    <div style={{ margin: '8rem 2rem' }}>
      <div {...getComboboxProps()}>
        <label {...getLabelProps()}>Choose an apple related string:</label>
        <input type="text" formMode="white" {...getInputProps()} />
      </div>

      <ul {...getMenuProps()} style={{ padding: 0, margin: 0, listStyleType: "none" }}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li key={`${item}${index}`} {...getItemProps({ item, index })} style={{ background: '#fafafa', padding: '10px' }}>
              {item}
            </li>
          ))}
      </ul>

      <p style={{ marginTop: '10rem' }}>Some extra content to make sure the viewport is scrollable.</p>
      <p style={{ marginTop: '10rem' }}>Some extra content to make sure the viewport is scrollable.</p>
      <p style={{ marginTop: '10rem' }}>Some extra content to make sure the viewport is scrollable.</p>
    </div >
  );
};

export default Home;
