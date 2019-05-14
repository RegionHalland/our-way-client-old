import React from "react"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import ArticleContent from "../components/ArticleContent"
import { graphql } from 'gatsby'

export const query = graphql`
	query($wordpress_id: Int!) {
		wordpressPage (wordpress_id: {eq: $wordpress_id}) {
			slug
			title
			content
		}
	}
`

const Page = ({
	pageContext,
	data: { 
		wordpressPage: { 
			title,
			content,
		}
	}
}) => (
	  <Layout>
		<SEO title={title} />
		<div className="py-8 md:py-12 bg-blue-dark block no-underline">
			<div className="wrapper">
				<div className="px-3">
					<h1 className="font-semibold text-white md:text-5xl mb-4 leading-tight max-w-md">{title}</h1>
				</div>
			</div>
		</div>
		<div className="px-3 pt-6 md:pt-8 wrapper mb-8 md:mb-12">
			<div className="w-full lg:w-6/12 mb-6 md:mb-8">
				<ArticleContent content={content} />
			</div>
		</div>
	  </Layout>
)

export default Page
