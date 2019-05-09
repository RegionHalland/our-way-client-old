import { useStaticQuery, graphql } from "gatsby"

export const useAllAreas = () => {
    const { allWordpressWpArea } = useStaticQuery(graphql`
        {
            allWordpressWpArea {
                edges {
                    node {
                        id
                        path
                        slug
                        name
                        description
                    }
                }
            }
        }
	`)

	return allWordpressWpArea.edges
}
