import { useState } from 'react'
import text from './data'

export const Form = ({ setList }) => {
  const [value, setValue] = useState(1)

  const generateText = (e) => {
    e.preventDefault()
    let newList = parseInt(value)
    newList =
      value < 0
        ? text.slice(0, 1)
        : value > text.length
        ? text
        : text.slice(0, value)
    setList(newList)
  }

  return (
    <form className="form" onSubmit={generateText}>
      <label htmlFor="paragraph" className="form-label">
        paragraphs:
      </label>

      <input
        className="input"
        id="paragraph"
        name="paragraph"
        type="number"
        min="1"
        step="1"
        max="8"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit">generate</button>
    </form>
  )
}
