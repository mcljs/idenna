import React, { useEffect, useState } from 'react';
import './style.css'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import { SRLWrapper } from 'simple-react-lightbox';
export const Image = () => {
 

const [tag, setTag] = useState('all');
 const [data,setData] = useState(useStaticQuery(graphql`
  query {
    allFile(filter:{absolutePath: {regex: "/static/assets/img/gallery/"}} ) 
    {
      edges {
        node {
          base
         childImageSharp {
            fluid(maxHeight: 600, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }        
        }
      }
    }
  }
  ` ))

useEffect(
		() => {
			tag === 'all' ? setData(data) : setData(data.allFile.edges.filter(image => image.tag === tag));
		},
		[tag]
	);

  return ( 
  <div className=" dark:bg-[#121f3d]">
   
    <SRLWrapper >
 <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {data.allFile.edges.map((image,key) => (
        <li key={key} className="relative cursor-pointer">
          <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <Img fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split('.'[0])}  className="object-cover group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for </span>
            </button>
          </div>
       
        </li>
      ))}
    </ul>
     
</SRLWrapper>
    </div>
  );
}


const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};
