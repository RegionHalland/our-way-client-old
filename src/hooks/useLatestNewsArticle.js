import { useStaticQuery, graphql } from "gatsby"

export const useLatestNewsArticle = () => {
	const { allWordpressWpNews } = useStaticQuery(graphql`
		{
			allWordpressWpNews (sort: {fields: date, order: DESC}, limit: 1) {
				edges {
					node {
						id
						title
						date
						path
						type
						slug
					}
				}
			}
		}
	`)

	return allWordpressWpNews.edges[0]
}