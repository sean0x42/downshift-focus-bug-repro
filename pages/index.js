import React, { useState } from 'react'
import { useCombobox } from 'downshift'

const items = [
  'Apples',
  'Applesaft',
  'Apple juice',
  'Apple pie',
  'Apple jam',
  'Apple sauce',
];

const menuStyles = {
  listStyleType: "none",
  margin: 0,
  padding: 0
}

const baseItemStyles = {
  padding: '10px'
}

function DropdownCombobox() {
  const [inputItems, setInputItems] = useState(items)

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter(item =>
          item.toLowerCase().startsWith(inputValue.toLowerCase()),
        ),
      )
    },
  })

  return (
    <div>
      <label {...getLabelProps()}>Choose an apple:</label>
      <div {...getComboboxProps()}>
        <input {...getInputProps()} />
        <button
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          &#8595;
        </button>
      </div>
      <ul {...getMenuProps()} style={menuStyles}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index
                  ? { ...baseItemStyles, backgroundColor: '#bde4ff' }
                  : { ...baseItemStyles }
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>

      <p style={{ marginTop: '50rem' }}>Some extra content to make sure the viewport is scrollable.</p>
    </div>
  )
}

export default DropdownCombobox
