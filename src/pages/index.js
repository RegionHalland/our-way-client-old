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
		
		<div className="mb-12 bg-grey-lighter py-8">
			<div className="px-3 wrapper">
				<EventCollection title="Evenemang" />
			</div>
		</div>
		
		<div className="px-3 wrapper mb-12">
			<NewsCollection title="Nyheter" />
		</div>
	</Layout>
)

export default IndexPage
