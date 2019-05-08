import React from "react"

import NewsCollection from "../components/NewsCollection"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import ArticleHero from "../components/ArticleHero"

const NewsPage = () => (
  <Layout>
    <SEO title="Nyheter" />
    <ArticleHero title="Kattegattleden utsedd till Europas bästa cykelled" label="Läs mer" date="27/09/19" />
	<div className="px-3 pt-8 wrapper mb-12">
		<NewsCollection title="Alla nyheter" />
	</div>
  </Layout>
)

export default NewsPage
