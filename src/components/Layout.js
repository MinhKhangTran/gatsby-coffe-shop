import React from "react"
import styled from "styled-components"
import { GlobalStyles } from "../styles/GlobalStyles"

const LayoutStyled = styled.div`
  header {
    font-family: "Oswald", sans-serif;
    background: url("/coffee.jpg");
    background-size: cover;
    color: #ffffff;
    h1 {
      margin: 0;
    }
    #inner {
      background: rgba(119, 79, 56, 0.85);
      padding: 1rem;
    }
  }
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <LayoutStyled>
        <header>
          <div id="inner">
            <h1>Joe's Coffee Shop</h1>
          </div>
        </header>
        <main id="main">{children}</main>
      </LayoutStyled>
    </>
  )
}
