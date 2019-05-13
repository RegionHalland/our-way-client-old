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
				content
				uploads { 
					uploads_group {
						title
						files {
							file {
								wordpress_id
								link
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

				{ 
					uploads.map(item =>
						<React.Fragment key={item.uploads_group.title}>
                  		<span className="block mb-3">{item.uploads_group.title}</span>
                  			{ 
								item.uploads_group.files.map(item =>
									<React.Fragment>
				                  		<span className="block">{item.file.link}</span>
				                  	</React.Fragment>
								)
			                }
			            </React.Fragment>
					)
                }
			</div>
		</div>
	</Layout>
)

export default AreaSingle
