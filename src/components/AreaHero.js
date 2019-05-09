import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

const AreaHero = ({title, image}) => (
	<div className="flex flex-wrap mb-8 md:flex-row-reverse">
		<div className="w-full lg:w-7/12 min-h-8 bg-grey-lighter">
			<Img
				fluid={image.localFile.childImageSharp.fluid}
				objectFit="cover"
				objectPosition="50% 50%"
				alt={image.alt_text}>
			</Img>
		</div>
		<div className="w-full lg:w-5/12 bg-blue flex py-8 lg:py-32 px-3 items-center">
			<HeroTitle className="text-white text-4xl lg:text-5xl">{title}</HeroTitle>
		</div>
	</div>
)

const HeroTitle = styled.h1`
	@media(min-width:768px) {
		padding-left: calc((100vw - 1240px)/2);
	}
`

export default AreaHero
