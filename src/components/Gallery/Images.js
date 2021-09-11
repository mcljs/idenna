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
        <div className="instagram-grid container mx-auto px-4 pb-12">
            {data.allFile.edges.map((image,key) =>(
              <div className="instagram-link-styles   cursor-pointer" key={key}>
              <div  />
                <Img 
               className="instagram-overlay"
                fluid={image.node.childImageSharp.fluid}
                alt={image.node.base.split('.'[0])} 
              />
 <div className="instagram-bottom">
                <span className="instagram-heart">
                
                </span>
 </div>
              </div>
            ))} 

        </div>
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
