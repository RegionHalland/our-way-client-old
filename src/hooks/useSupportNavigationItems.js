import { useStaticQuery, graphql } from "gatsby"

export const useSupportNavigationItems = () => {
    const { wordpressWpApiMenusMenusItems } = useStaticQuery(graphql`
		{
			wordpressWpApiMenusMenusItems(name: {eq: "Supportmeny"}) {
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
