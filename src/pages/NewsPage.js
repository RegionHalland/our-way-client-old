import React from "react"

import NewsCollection from "../components/NewsCollection"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"

const NewsPage = () => (
  <Layout>
    <SEO title="Nyheter" />
    <div className="bg-blue-dark py-16">
    	
    </div>
	<div className="px-3 pt-8 wrapper mb-12">
		<NewsCollection title="Alla nyheter" />
	</div>
  </Layout>
)

export default NewsPage
