import * as React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { Index } from "lunr"
import { useHotkeys } from 'react-hotkeys-hook'
import { useClickAway } from 'react-use'
import { Link, graphql } from "gatsby"

import SearchForm from '../components/Search/search-form'
const Search = ({ data, location }) => {
const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const searchInputRef = React.useRef(null)
  const boxRef = React.useRef(null)
useHotkeys('cmd+k', () => setOpen(true))
  useHotkeys('ctrl+k', () => setOpen(true))
  useHotkeys('esc', () => setOpen(false))
  useClickAway(boxRef, () => setOpen(false))


  // We can read what follows the ?q= here
  // While you could install some external library
  // (or should if you care about IE users),
  // URLSearchParams provides a native way to get URL params
  // location.search.slice(1) gets rid of the "?"
 
  // LunrIndex is available via page query
console.log(data);



  // lunr in action here


  return(
  <>
    <button
        onClick={() => setOpen(true)}
        title="cmd+k OR ctrl+k"
        type="button"
      >
        <SearchIcon className="w-6 h-6 text-red-600 dark:text-white" />
      </button>
<Transition.Root as={React.Fragment} show={open} >
        <Dialog
          as="div"
          className="overflow-y-auto fixed inset-0 z-[999999]"
          initialFocus={searchInputRef}
          onClose={setOpen}
          open={open}
          static
        >
          <div className="flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              aria-hidden="true"
              className="hidden sm:inline-block sm:h-screen sm:align-middle"
            >
              &#8203;
            </span>
            <div className="flex fixed top-0 left-0 z-[200] flex-col p-4 w-screen h-screen sm:p-6 md:p-[10vh] lg:p-[12vh]">
              <Transition.Child
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                {/* Adding an extra div to avoid issues with Ref */}
                <div className="transition-all transform"  location={location} >
                  <div
                    className="flex flex-col px-6 mx-auto w-full max-w-[47.375rem] min-h-0 bg-white rounded-[1rem] shadow-search"
                    ref={boxRef}
                  >
                    <SearchForm  />
                                     </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
  </>
)}



export default Search


