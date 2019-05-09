import { useStaticQuery, graphql } from "gatsby"

export const useHeaderNavigationItems = () => {
    const { wordpressWpApiMenusMenusItems } = useStaticQuery(graphql`
		{
			wordpressWpApiMenusMenusItems(name: {eq: "Huvudmeny"}) {
				items {
					wordpress_id
					order
					title
					description
					object_id
					object
					object_slug
				}
			}
		}
		`)
				
	return wordpressWpApiMenusMenusItems
}
