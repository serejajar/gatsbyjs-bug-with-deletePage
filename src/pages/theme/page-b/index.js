import React from "react"

import Layout from "../../../components/layout"

import { utilFunctionForPageB } from "./utils"
import SomeComponent from "./components/component"

const IndexPage = () => {

  return (
    <Layout>
      <h1>Page B</h1>
      <SomeComponent />
      <p>{utilFunctionForPageB()}</p>
    </Layout>
  )
}
export default IndexPage
