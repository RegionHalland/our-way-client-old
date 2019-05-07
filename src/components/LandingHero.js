import { Link } from "gatsby"
import React from "react"

import styled from 'styled-components'

const LandingHero = () => (
  <div className="flex flex-wrap mb-8">
	 <div className="w-full md:w-7/12 min-h-8 bg-grey flex items-center px-3 py-6 relative">
		{/* TODO: Insert background image */}
		<HeroTitle className="text-3xl md:text-4xl leading-tight lg:text-5xl text-white">Välkommen till oss <br/>på Visithalland</HeroTitle>
	 </div>
	 <div className="w-full md:w-5/12">
		<div className="px-3 md:px-6 py-8 md:py-12 bg-blue-dark">
			<span className="text-grey-light mb-2 block">2019/08/18</span>
			<h3 className="text-2xl font-semibold text-white mb-4 leading-tight max-w-sm">Kattegattleden utsedd till Europas bästa cykelled</h3>
			<Link className="text-white font-semibold" to="/NewsSingle/">Läs nyhet</Link>
		</div>
		<div className="px-3 md:px-6 py-8 md:py-12 bg-blue"> 
			<span className="text-grey-light mb-2 block">2019/08/18</span>
			<h3 className="text-2xl font-semibold text-white mb-4 leading-tight max-w-sm">Mikael Ahlerup – Led dig själv innan du leder andra</h3>
			<Link className="text-white font-semibold" to="/EventSingle/">Gå till event</Link>
		</div>
	 </div>
  </div>
)


const HeroTitle = styled.h1`
	@media(min-width:768px) {
		padding-left: calc((100vw - 1240px)/2);
	}
	text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`

export default LandingHero