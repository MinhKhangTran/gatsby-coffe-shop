import React from "react"
import styles from "./Layout.module.css"
import { graphql, Link, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "coffee.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <BackgroundImage
        id={styles.header}
        fluid={data.file.childImageSharp.fluid}
      >
        <div id={styles.inner}>
          <h1>
            <Link to="/">Ein Kaffee Laden</Link>
          </h1>
          <Link to="/blog">Blog</Link>
          <Link to="/menu">Menü</Link>
        </div>
      </BackgroundImage>
      <main id={styles.main}>{children}</main>
    </div>
  )
}
