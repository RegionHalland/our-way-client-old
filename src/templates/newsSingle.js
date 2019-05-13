import React from "react"
import { graphql } from 'gatsby'
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import Author from "../components/Author"
import ArticleHeader from "../components/ArticleHeader"
import ArticleContent from "../components/ArticleContent"

export const query = graphql`
	query($slug: String!) {
		wordpressWpNews (slug: {eq: $slug}) {
			wordpress_id
			title
			slug
			content
			author {
				email
				first_name
				last_name
					acf {
						work_title
						phone_number
						profile_image {
							localFile {
								childImageSharp {
									fluid(quality: 100, maxWidth: 200) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}
			}
			featured_media {
				alt_text
				localFile {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1200) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
    		}
		}
	}
`

const NewsSingle = ({ data: { wordpressWpNews: { title, date, featured_media, content, author: { email, first_name, last_name, acf: { phone_number, work_title, profile_image } } } } }) => {
	return (
		<Layout>
			<SEO title="Nyhet" />
			<ArticleHeader title={title} date={date} image={featured_media} />
			<div className="px-3 wrapper flex flex-wrap justify-between pt-6 mb-6 md:pt-8 md:mb-8">
				<div className="w-full lg:w-6/12 mb-6 md:mb-8">
					<ArticleContent content={content} />
				</div>
				<div className="w-full lg:w-5/12 mb-4">
					<h3 className="mb-4">Skrivet av </h3>
					<Author email={email} phoneNumber={phone_number} firstName={first_name} lastName={last_name} profileImage={profile_image} workTitle={work_title} />
				</div>
			</div>
		</Layout>
	)
}

export default NewsSingle
