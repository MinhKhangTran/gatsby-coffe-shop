import React from "react"
import { graphql, Link } from "gatsby"
import BlogPost from "../components/BlogPost"
import Layout from "../components/Layout"
import styles from "./BlogList.module.css"

// get parameters from pageContext
const BlogList = ({ data, pageContext }) => {
  // Coditional rendering for next/prev Page
  const prevPage =
    pageContext.currentPage === 2
      ? "/blog"
      : `/blog/${pageContext.currentPage - 1}`
  const nextPage = `/blog/${pageContext.currentPage + 1}`
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div id={styles.hero}>
        <h1>Der Kaffee Blog</h1>
      </div>
      <main className={styles.blogList}>
        {posts.map(post => {
          return (
            <BlogPost
              key={post.node.id}
              slug={post.node.fields.slug}
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
            ></BlogPost>
          )
        })}
      </main>
      {/* pagination stuff */}
      <div id={styles.pageLinks}>
        {pageContext.currentPage > 1 && (
          <Link to={prevPage}>Vorherige Seite</Link>
        )}
        {pageContext.currentPage < pageContext.pageCount && (
          <Link to={nextPage}>Nächste Seite</Link>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { contentKey: { eq: "blog" } } }
      limit: $limit
      skip: $skip
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
`

export default BlogList
