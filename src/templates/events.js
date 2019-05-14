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
	console.log(pageContext)
	return (
  <Layout>
    <SEO title="Evenemang" />
    <ArticleHero title="Workshop för Skördetid i Halland" label="Gå till event" date="27/09/19" />
	<div className="px-3 pt-8 wrapper mb-12">
		<EventCollection title="Kommande evenemang" events={data.allWordpressWpEvent.edges} />
	</div>
  </Layout>
)}

export default EventsPage
