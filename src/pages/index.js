import React from "react"
import { Link } from "gatsby"

import LandingHero from "../components/LandingHero"
import AreaCollection from "../components/AreaCollection"
import EventCollection from "../components/EventCollection"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Visithalland`]} />
    <LandingHero />
    <div className="px-3">
		<AreaCollection />
		<EventCollection />
	</div>
  </Layout>
)

export default IndexPage
