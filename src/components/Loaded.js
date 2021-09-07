import React from 'react'
import LoaderSVG from '../images/loader.svg'
const Loaded = (  ) => (

    <div className="flex items-center  justify-center absolute z-100 inset-0 dark:bg-[#121f3d] ">
              <img src={LoaderSVG} alt="loader spinner" width="150" height="150" className="animate-spin"/>
        </div> 
)
export default Loaded
