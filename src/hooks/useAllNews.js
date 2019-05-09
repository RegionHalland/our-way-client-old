import { useStaticQuery, graphql } from "gatsby"

export const useAllNews = () => {
	const { allWordpressWpNews } = useStaticQuery(graphql`
		{
			allWordpressWpNews (sort: {fields: date, order: DESC}) {
				edges {
					node {
						id
						title
						date
						path
						type
						slug
						featured_media {
							id
							alt_text
							localFile {
								childImageSharp {
									# edit the maxWidth value to generate resized images
									fluid(quality: 100, maxWidth: 1200) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
							
						}
					}
				}
			}
		}
	`)

	return allWordpressWpNews.edges
}