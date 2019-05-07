import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

const AreaHero = () => (
  <div className="flex flex-wrap mb-8 md:flex-row-reverse">
	<div className="w-full md:w-7/12 min-h-8 bg-grey-lighter">
		{/* TODO: Insert background image */}
	</div>
	<div className="w-full md:w-5/12 bg-blue flex py-8 md:py-32 px-3 items-center">
		<HeroTitle className="text-white text-4xl">Kunskap</HeroTitle>
	</div>
  </div>
)

const HeroTitle = styled.h1`
	@media(min-width:768px) {
		padding-left: calc((100vw - 1240px)/2);
	}
`

export default AreaHero
