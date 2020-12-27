import React, { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  
  const { setSearchText } = useGlobalContext()

  const userInput = useRef('')
  
  useEffect(() => {
    userInput.current.focus()
  }, [])

  const inputText = () => {
    setSearchText(userInput.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="user-input">search your favorite drink</label>
          <input 
            type="search" 
            id='user-input' 
            ref={userInput} 
            placeholder='e.g. gin'
            onChange={inputText} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
