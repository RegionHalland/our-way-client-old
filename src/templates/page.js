import React from "react"

import NewsCollection from "../components/NewsCollection"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import ArticleHero from "../components/ArticleHero"

const Page = ({ pageContext }) => {
  console.log("context", pageContext)
  return (
  <Layout>
      <SEO title="Page" />
      <ArticleHero title="Page" label="Läs mer" date="27/09/19" />
      <div className="px-3 pt-8 wrapper mb-12">
        <h1>{ pageContext.id }</h1>
      </div>
  </Layout>
)}

export default Page
