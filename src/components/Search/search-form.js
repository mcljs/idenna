import React, { useState, useRef } from "react"
import { navigate } from "@reach/router"
import { SearchIcon, XIcon } from '@heroicons/react/solid'
import Image from '../../images/comision.jpg'
import Link from '../link'

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
    <>
      <Link to="https://forms.gle/YauVoTjo1eBARSRL7">
    <header className="flex relative justify-center z-[1] flex-none items-center border-[#e5e7eb] border-b">
      <img src={Image} className="pt-4 pb-4 md:w-[400px] w-full"/> 
        </header>
      </Link>
    </>
  )
}
export default SearchForm
