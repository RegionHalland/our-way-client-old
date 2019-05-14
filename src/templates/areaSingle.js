import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Layout'
import SEO from '../components/Seo'
import AreaHero from '../components/AreaHero'
import ArticleContent from '../components/ArticleContent'
import AreaUploads from '../components/AreaUploads'
import Author from '../components/Author'

export const query = graphql`
	query($slug: String!) {
		wordpressWpArea (slug: {eq: $slug}) {
			name
			description
			acf {
				content
				uploads { 
					uploads_group {
						title
						files {
							file {
								wordpress_id
								filename
								filesize
								name
								description
								subtype
								link
								url {
					                id
					                path
					                slug
					                localFile {
					                  id
					                  prettySize
					                  publicURL
					                }
					              }
							}
						}
					}
				}
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
				content,
				image,
				uploads,
			}
		}
	}
}) => (
	<Layout>
		<SEO title={name} />
		<AreaHero title={name} image={image} />
		<div className="px-3 wrapper flex flex-wrap justify-between mb-6 md:mb-8">
			<div className="w-full lg:w-6/12 mb-6">
				<h2 className="mb-3 text-lg md:text-xl">Om <span className="lowercase">{name}</span></h2>
				<ArticleContent content={content} />
			</div>
			<div className="w-full lg:w-5/12">
				<h2 className="mb-4 text-base md:text-xl">Frågor? Kontakta oss.</h2>
				<Author />
			</div>
		</div>
		<div className="py-8 bg-grey-lighter">
			<div className="wrapper px-3">
				<AreaUploads uploads={uploads}/>
			</div>
		</div>
	</Layout>
)

export default AreaSingle
