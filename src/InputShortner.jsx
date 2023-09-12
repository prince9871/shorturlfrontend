import React, { useState } from 'react'

const InputShortner = ({ setInputValue }) => {
  const [value, setValue] = useState("")

  const handleClick = () => {
    setInputValue = (value);
    setValue("");
  }
  return (
    <div className='inputContainer'>
      <h1>URL <span>Shortner</span></h1>
      <div>
        <input type="text" name="" placeholder='Drop Here Your Long Url' value={value}
          onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  )
}

export default InputShortner
