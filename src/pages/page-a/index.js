import React from "react"

import Layout from "../../components/layout"

import { utilFunctionForPageA } from "./utils"
import SomeComponent from "./components/component"

const IndexPage = () => {

  return (
    <Layout>
      <h1>Page A</h1>
      <SomeComponent />
      <p>{utilFunctionForPageA()}</p>
    </Layout>
  )
}
export default IndexPage
