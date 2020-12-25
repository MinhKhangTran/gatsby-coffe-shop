import React from "react"
import styles from "./BlogPost.module.css"
import { Link } from "gatsby"

const BlogPost = ({ title, date, excerpt, slug }) => {
  return (
    <article className={styles.blog}>
      <h2>
        <Link to={slug}>{title}</Link>
      </h2>
      <h3>{date}</h3>
      <p>{excerpt}</p>
    </article>
  )
}

export default BlogPost
