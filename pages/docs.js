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
      <label {...getLabelProps()}>Choose an element:</label>
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
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index
                  ? { backgroundColor: '#bde4ff' }
                  : {}
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
