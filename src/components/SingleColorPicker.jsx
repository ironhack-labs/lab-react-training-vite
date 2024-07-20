import { Input } from 'postcss'
import React from 'react'

export default function SingleColorPicker({color, value, onChange}) {
  return (
    <>
    {color.toUpperCase()}<input type="range" min="0" max="255" value={value} onChange={(e) => onChange(e.target.value, color)} />
    </>
  )
}
