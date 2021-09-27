import React, { useState, useRef } from "react"
import { navigate } from "@reach/router"
import { SearchIcon, XIcon } from '@heroicons/react/solid'
import Image1 from '../../images/actividad1.jpg'
import Image2 from '../../images/actividad2ç.jpg'
import Image3 from '../../images/comision.jpg'
import Link from '../link'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
     
    <header >
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
 className="flex relative justify-center z-[1] flex-none items-center border-[#e5e7eb] border-b"
    >
      <SwiperSlide className="flex relative justify-center"><img src={Image1} className="pt-4 pb-4 md:w-[500px]  w-full "/> </SwiperSlide>
     
        <SwiperSlide className="flex relative justify-center"> <Link to="https://forms.gle/YauVoTjo1eBARSRL7"><img src={Image3} className="pt-4 pb-4 md:w-[400px] w-full"/> </Link> </SwiperSlide>
      
      ...
    </Swiper>
        </header>
     
    </>
  )
}
export default SearchForm
