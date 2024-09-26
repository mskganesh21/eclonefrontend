import { useState } from 'react'

const colors = [
  'red',
  'green',
  'blue',
  'orange',
  'yellow',
  'purple',
  'black',
  'pink',
]

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null)

  const getTickColor = (backgroundColor) => {
    // Create a temporary element to compute the RGB values
    const tempElem = document.createElement('div')
    tempElem.style.color = backgroundColor
    document.body.appendChild(tempElem)
    const rgbColor = window.getComputedStyle(tempElem).color
    document.body.removeChild(tempElem)

    // Extract RGB values
    const rgb = rgbColor.match(/\d+/g).map(Number)
    const luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]
    return luminance > 186 ? 'black' : 'white'
  }

  return (
    <>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setSelectedColor(color)}
          style={{
            backgroundColor: color,
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            border: 'none',
            margin: '5px',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          {selectedColor === color && (
            <span
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: getTickColor(color),
                fontSize: '16px',
              }}
            >
              ✓
            </span>
          )}
        </button>
      ))}
    </>
  )
}

export default ColorPicker
