import React, { useState, useRef } from "react"
import { navigate } from "@reach/router"
import { SearchIcon, XIcon } from '@heroicons/react/solid'

const SearchForm = ({ initialQuery = "" }) => {
  // Create a piece of state, and initialize it to initialQuery
  // query will hold the current value of the state,
  // and setQuery will let us change it
  const [query, setQuery] = useState(initialQuery)
  const inputEl = useRef(null)
  // On input change use the current value of the input field (e.target.value)
  // to update the state's query value
  const handleChange = e => {
    setQuery(e.target.value)
  }

  // When the form is submitted navigate to /search
  // with a query q paramenter equal to the state's query value
  const handleSubmit = e => {
    e.preventDefault()
    const q = inputEl.current.value
    navigate(`/search?q=${q}`)
  }
  return (
    <header className="flex relative z-[1] flex-none items-center border-[#e5e7eb] border-b">
    <form className="flex items-center flex-auto min-w-0"
        noValidate role="search" onSubmit={handleSubmit}>
      <label className="flex-none" htmlFor="search-input" id="search-label">
          <SearchIcon className="w-6 h-6 text-[#5468FF]" />
        </label>
     <div>
      <input
      
        ref={inputEl} 
          aria-autocomplete="list"
          aria-labelledby="search-label"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          className="flex-auto mx-4 min-w-0 h-[4.5rem] font-sans text-base font-normal text-black bg-transparent appearance-none focus-visible:focus:outline-none"
        type="search"
        value={query}
        placeholder=" "
        onChange={handleChange}
      />
      
  <button className="hidden" title="Clear the query" type="reset">
          esc <XIcon />
        </button>
      </div>
    
    </form>
   <button className="before:content-['esc'] flex-none py-[0.125rem] px-[0.374rem] text-[0px] before:text-[#9ca3af] before:text-sm before:leading-5 bg-[#f9fafb] rounded-md border-[#d1d5db] border">
        Cancel
      </button>
    </header> 
  )
}
export default SearchForm
