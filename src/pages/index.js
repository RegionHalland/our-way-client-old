import React from "react"

import LandingHero from "../components/LandingHero"
import AreaCollection from "../components/AreaCollection"
import EventCollection from "../components/EventCollection"
import NewsCollection from "../components/NewsCollection"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Visithalland`]} />
    <LandingHero />
    <div className="px-3 wrapper mb-8">
		<AreaCollection />
	</div>
	<div className="px-3 wrapper mb-8">
		<EventCollection />
	</div>
	<div className="px-3 wrapper mb-8">
		<NewsCollection />
	</div>
  </Layout>
)

export default IndexPage
