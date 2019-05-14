import React from 'react'
import { graphql } from 'gatsby'

import EventCollection from "../components/EventCollection"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import ArticleHero from "../components/ArticleHero"

export const query = graphql`
	query($now: Date) {
		allWordpressWpEvent(filter: {acf: {start_date: {gte: $now }}} sort: {fields: acf___start_date}) {
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

const EventsPage = ({ data, pageContext }) => {
	
	const featuredEvent = data.allWordpressWpEvent.edges[0]
	const restOfEvents = data.allWordpressWpEvent.edges.filter((item, index) => index !== 0)

	return (
		<Layout>
			<SEO title="Evenemang" />
			<ArticleHero 
				title={featuredEvent.node.title} 
				label="Gå till event" 
				path={featuredEvent.node.path}
				date={featuredEvent.node.acf.start_date} 
			/>
			<div className="px-3 md:px-6 lg:px-3 pt-8 wrapper mb-12">
				<EventCollection title="Kommande evenemang" events={restOfEvents} />
			</div>
		</Layout>
	)
}

export default EventsPage
