import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import BlogPost from "./BlogPost"

const BlogList = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { contentKey: { eq: "blog" } } }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <div>
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <BlogPost
            key={edge.node.id}
            title={edge.node.frontmatter.title}
            date={edge.node.frontmatter.date}
            excerpt={edge.node.excerpt}
            slug={edge.node.fields.slug}
          />
        )
      })}
      <div>
        <Link to="/Blog">Mehr</Link>
      </div>
    </div>
  )
}

export default BlogList
