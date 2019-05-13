import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'
import SEO from '../components/Seo'
import AreaHero from '../components/AreaHero'
import ArticleContent from '../components/ArticleContent'
import Author from '../components/Author'

export const query = graphql`
	query($slug: String!) {
		wordpressWpArea (slug: {eq: $slug}) {
			name
			description
			acf {
				image {
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
	}
`

const AreaSingle = ({
	 data: { 
		wordpressWpArea: { 
			name,
			description,
			acf: {
				image
			}
		}
	}
}) => (
	<Layout>
		<SEO title={name} />
		<AreaHero title={name} image={image} />
		<div className="px-3 wrapper flex flex-wrap justify-between mb-8">
			<div className="w-full lg:w-6/12">
				<h2 className="mb-3">Om {name}</h2>
				<ArticleContent content={description} />
			</div>
			<div className="w-full lg:w-5/12">
				<h2 className="mb-4">Frågor? Kontakta oss.</h2>
				<Author />
			</div>
		</div>
	</Layout>
)

export default AreaSingle
