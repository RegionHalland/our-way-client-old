import React from "react"

import Layout from "../layouts/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Visithalland`]} />
    <h1>Start</h1>
  </Layout>
)

export default IndexPage
