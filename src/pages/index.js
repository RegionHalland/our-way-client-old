import React from "react"
import { graphql } from 'gatsby'

import LandingHero from "../components/LandingHero"
import AreaCollection from "../components/AreaCollection"
import EventCollection from "../components/EventCollection"
import NewsCollection from "../components/NewsCollection"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"

export const query = graphql`
	query($now: Date) {
		allWordpressWpEvent(filter: {acf: {start_date: {gte: $now }}} sort: {fields: acf___start_date} limit: 5) {
			edges {
				node {
					id
					title
					path
					acf {
						start_date
					}
				}
			}
		}
	}
`

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Home" keywords={[`Visithalland`]} />
			<LandingHero nextEvent={data.allWordpressWpEvent.edges[0].node} />
			
			<div className="px-3 md:px-6 lg:px-3 wrapper mb-8">
				<AreaCollection />
			</div>
			
			<div className="mb-12 bg-grey-lighter py-8">
				<div className="px-3 md:px-6 lg:px-3 wrapper">
					<EventCollection title="Evenemang" events={data.allWordpressWpEvent.edges} showAllEventsLink={true} />
				</div>
			</div>
			
			<div className="px-3 md:px-6 lg:px-3 wrapper mb-12">
				<NewsCollection title="Nyheter" />
			</div>
		</Layout>
	)
}

export default IndexPage
