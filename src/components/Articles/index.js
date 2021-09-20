import React from 'react'
import { StaticQuery, graphql} from "gatsby";
import { Link } from "gatsby"
import Img from "gatsby-image";

const Articles = (  ) => {
 


  
  return(
    
      <>
      
        <section className="px-12 py-4 dark:bg-[#121f3d] bg-gray-100">
    <h2 className=" text-center order-1 text-gray-900 text-3xl font-extrabold tracking-tight mt-2 mb-4 dark:text-[#03091e] mt-2">Actualidad:</h2>
      
          

      <StaticQuery
        query={graphql`
          {
          featuredPost:allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC},limit: 1) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        description
        cover {
          childImageSharp {
            fluid(maxHeight: 300, maxWidth: 600, quality: 100, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid            }
          }
        }
      }
    }
  }
            allPosts:allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC},limit: 3,skip:1) {
    nodes {
      fields {
        slug
      }
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxHeight: 250, maxWidth: 350, quality: 100, cropFocus: ATTENTION) {
            ...GatsbyImageSharpFluid            }
          }
        }
      }
    }
  }
          }
        `}
        render={({ featuredPost, allPosts }) => (
          <>
         <div class="">
    <main class="mt-12">
    
      <div class="grid md:grid-cols-2 grid-cols-1 md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
        
        <div class="mb-4 lg:mb-0  p-4 lg:p-0 w-4/7 relative rounded block">
          <Img     fluid={
                  featuredPost.nodes[0].frontmatter.cover
                    .childImageSharp.fluid
                } class="rounded-md object-cover w-full h-64"/>
          
          <h1 class="text-gray-800 md:text-4xl  text-xl font-bold mt-2 mb-2 leading-tight">
            {featuredPost.nodes[0].frontmatter.title}
          </h1>
          <p class="text-gray-600 mb-4">
            {featuredPost.nodes[0].frontmatter.description}
          </p>
          <Link to={featuredPost.nodes[0].fields.slug} class="inline-block px-6 py-3 mt-2 rounded-md bg-red-primary text-gray-100">
            Leer mas
          </Link>
        </div>

       
        <div class="w-full md:w-4/7">
      {allPosts.nodes.map((post, index) => (
      
       
         
          <div key={index}>
            <div  class="grid md:grid-cols-2 grid-cols-1 rounded w-ful md:flex-row mb-10">
            <Img fluid={post.frontmatter.image.childImageSharp.fluid} class="block rounded-md h-64 md:h-32 m-4 md:m-0 object-cover" />
              <div class="bg-white rounded md:px-4 px-2 py-2 shadow-lg">
             
              <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2 line-clamp-3">
                 {post.frontmatter.title}
              </div>
              <p class="block  pl-0 pt-1 text-sm text-gray-600 line-clamp-3">
                 {post.frontmatter.description}
              </p>
 <Link to={post.fields.slug} class="inline-block px-6 py-3 mt-2 rounded-md bg-red-primary text-gray-100">
            Leer mas
          </Link>
            </div>
          </div>
</div>
  ))}
        </div>

      </div>
    </main> 
       </div>
          </>
        )}
      />
    </section>
      </>

  );
}
export default Articles
