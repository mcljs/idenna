import React from "react"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import HeaderLayout from "../components/HeaderLayout"
import PostItem from "../components/PostItem"
import { useStaticQuery, graphql } from "gatsby"
import ImageBlog from '../images/blog.jpeg'

const Blog = () =>{

const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark (sort: {fields: frontmatter___date, order: DESC},limit: 15){
        edges {
          node {
           fields {
              slug
              }
            frontmatter {
            title
              cover{
                childImageSharp{
                  gatsbyImageData(layout:CONSTRAINED)
                              }
                     }
           
            description
            date(locale: "es-ve", formatString: "DD [de] MMMM [de] YYYY ")
            }
            timeToRead
          }
        }
      }
    }
  `)

const postList = allMarkdownRemark.edges


  return(
  <Layout>
    <SEO title="Noticias" />
    <HeaderLayout 
      heading="Noticias"
      image={ImageBlog} />
    <section className="sm:py-10   mx-auto px-8 dark:bg-[#03091e]">
 
   
  <div className="mt-2 relative grid gap-x-4 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12 mx-auto max-w-7xl mb-64 dark:bg-[#03091e]">
{postList.map(
        ({
          node: {
            frontmatter: {cover, date, description, title },
            timeToRead,
            fields: { slug },
          },
        }) => (
    <PostItem 
    slug={slug}
    image={cover.childImageSharp.gatsbyImageData}
    title={title}
    description={description}
    date={date}
    timeToRead={timeToRead}
          />

        ))}
  </div>
  </section>
  </Layout>

)
}
export default Blog
