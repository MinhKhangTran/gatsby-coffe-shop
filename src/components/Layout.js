import React from "react"
import styles from "./Layout.module.css"
import { Link } from "gatsby"

export default function Layout({ children }) {
  return (
    <div>
      <header id={styles.header}>
        <div id={styles.inner}>
          <h1>
            <Link to="/">Ein Kaffee Laden</Link>
          </h1>
          <Link to="/blog">Blog</Link>
        </div>
      </header>
      <main id={styles.main}>{children}</main>
    </div>
  )
}
