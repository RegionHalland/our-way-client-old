import React from "react"
import { graphql } from 'gatsby'

import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import EventInfo from "../components/EventInfo"
import ArticleHeader from "../components/ArticleHeader"
import ArticleContent from "../components/ArticleContent"

export const query = graphql`
	query($slug: String = "lorem-dolor-sit-amet") {
		wordpressWpEvent(slug: { eq: $slug } ) {
			wordpress_id
			title
			content
			acf {
				application_link {
					title
					url
				}
				start_date,
				location {
					address
				}
			}
		}
	}
`

const EventSingle = ({ data: { wordpressWpEvent: { title, content, acf: { start_date, location: { address }, application_link } } } }) => (
	<Layout>
		<SEO title={title} />
		<ArticleHeader title={title} date={start_date} />
		<div className="px-3 wrapper flex flex-wrap justify-between pt-6 md:pt-8 mb-8">
			<div className="w-full lg:w-6/12 mb-6 md:mb-8">
				<ArticleContent content={content} />
			</div>
			<div className="w-full lg:w-5/12">
				<h3 className="mb-6">Information</h3>
				<EventInfo
					address={address}
					date={start_date}
					linkTitle={application_link.title}
					link={application_link.url}
				/>
			</div>
		</div>
	</Layout>
)

export default EventSingle
