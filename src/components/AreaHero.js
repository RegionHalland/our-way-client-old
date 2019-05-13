import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

const AreaHero = ({title, image}) => (
	<div className="flex flex-wrap mb-6 md:mb-8 md:flex-row-reverse">
		<div className="w-full lg:w-7/12 bg-grey-lighter">
			<Img
				className="h-full"
				fluid={image.localFile.childImageSharp.fluid}
				objectFit="cover"
				objectPosition="50% 50%"
				alt={image.alt_text}>
			</Img>
		</div>
		<div className="w-full lg:w-5/12 bg-blue flex py-6 md:py-8 px-3 items-center">
			<HeroInner>
				<div className="mb-2 text-sm md:text-base font-semibold text-blue-lightest">
					Område
				</div>
				<h1 className="text-white text-2xl md:text-3xl lg:text-4xl break-words">{title}</h1>
			</HeroInner>
		</div>
	</div>
)

const HeroInner = styled.div`

	@media(min-width:768px) {
		padding-left: calc((100vw - 1240px)/2);
	}
`

export default AreaHero
