// https://www.colourlovers.com/palette/49963/let_them_eat_cake
import React from "react"
import Layout from "./src/components/Layout"

export const wrapRootElement = ({ element }) => {
  return <Layout>{element}</Layout>
}
