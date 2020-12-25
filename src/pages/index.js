import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"

const IndexStyled = styled.div`
  background: url("/latte.jpg");
  background-size: cover;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    margin: 0;
    text-transform: uppercase;
    font-size: 5rem;
    padding: 0.5rem;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.5);
  }
`

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <IndexStyled>
        <h1>{data.site.siteMetadata.title}</h1>
      </IndexStyled>
    </Layout>
  )
}
