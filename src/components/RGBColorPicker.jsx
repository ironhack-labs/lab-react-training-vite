import React from 'react'
import SingleColorPicker from './SingleColorPicker'

export default function RGBColorPicker() {
    const [rValue, setRValue] = React.useState("00")
    const [gValue, setGValue] = React.useState("00")
    const [bValue, setBValue] = React.useState("00")

    const onChange = (value, color) => {
      if (color === 'r') {
        //change to hex
        value = +value.toString(16)
        if (value.length === 1) {
          value = `0${value}`
        }
        setRValue(value)
      } else if (color === 'g') {
        value = +value.toString(16)
        if (value.length === 1) {
          value = `0${value}`
        }
        setGValue(value)
      } else if (color === 'b') {
        let newValue = +value.toString(16)
        if (newValue.length === 1) {
          newValue = `0${newValue}`
        }
        setBValue(newValue)
      }
    }

  return (
    <div>
    <SingleColorPicker
        color="r"
        value={rValue}
        onChange={onChange}
      />

      <SingleColorPicker
        color="g"
        value={gValue}
        onChange={onChange}
      />

      <SingleColorPicker
        color="b"
        value={bValue}
        onChange={onChange}
      />

      <input readOnly type="color" value={`#${rValue}${gValue}${bValue}`} />
    </div>
  )
}
