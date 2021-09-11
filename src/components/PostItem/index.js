import React from 'react'
import {GatsbyImage} from 'gatsby-plugin-image'
import Link from '../link'
const PostItem = ({slug,image,date,title,description,}) => (


    <div className="col-span-4 mb-10">
      <div className="relative w-full">
        <Link className="group peer relative block w-full focus:outline-none" to={slug}>
          <div className="aspect-h-4 aspect-w-3 rounded-lg"> <GatsbyImage className="flex overflow-hidden block h-64 md:h-42 m-4 md:m-0 object-cover rounded-lg group-hover:shadow-lg group-focus:shadow-lg duration-200 transform group-hover:-translate-y-1 group-focus:-translate-y-1 object-contain"  image={image}/> <div className="focus-ring w-full rounded-lg object-cover transition w-full max-w-md h-full backdrop-blur-xl"></div> </div> 
     <section className="p-2">
<span className="mt-8 text-gray-500 text-xl font-medium">{date} </span>
        <h2 className="text-2xl font-medium md:text-3xl text-black mt-4 dark:text-white line-clamp-3">{title}</h2>
        <p className="mt-2 prose opacity-75 hover:opacity-100 transition-opacity duration-200 ease-in-out line-clamp-3 dark:text-[#becde3] line-clamp-3">{description}</p>
      </section>
        
      </Link>
</div>

    </div>





)

export default PostItem
