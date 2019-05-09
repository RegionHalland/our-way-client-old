import { useStaticQuery, graphql } from "gatsby"

export const useThemeOptions = () => {
	const { wordpressAcfOptions } = useStaticQuery(graphql`
			{
				wordpressAcfOptions {
					options {
						title
						background_image {
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
		`)

	return wordpressAcfOptions.options
}
