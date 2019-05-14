import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import Img from "gatsby-image/withIEPolyfill"
import ReactHtmlParser from 'react-html-parser'
import Moment from 'react-moment'

import { useThemeOptions } from '../hooks/useThemeOptions'
import { useLatestNewsArticle } from '../hooks/useLatestNewsArticle'

const LandingHero = ({ nextEvent }) => {
	const { title: heroTitle, background_image } = useThemeOptions()
	const { node: latestNewsArticle } = useLatestNewsArticle()

	return (
		<div className="flex flex-wrap mb-8">
			<div className="w-full lg:w-7/12 min-h-8 flex items-center px-3 py-6 relative">
				<HeroTitle className="text-4xl leading-tight md:text-5xl w-full md:w-8/12 lg:w-10/12 text-white z-10">{ ReactHtmlParser(heroTitle) }</HeroTitle>
				<Img
					fluid={background_image.localFile.childImageSharp.fluid}
					objectFit="cover"
					objectPosition="50% 50%"
					alt={background_image.alt_text}
					style={{position: 'absolute'}}
					className="h-full w-full pin-l pin-t"
				/>				
			</div>
			<div className="w-full lg:w-5/12 flex flex-wrap">
					<Link className="w-full flex sm:w-6/12 lg:w-full no-underline" to={latestNewsArticle.path}>
						<HeroNews className="px-3 w-full md:px-6 py-8 md:py-12 bg-blue-dark">
							<span className="text-grey-light mb-2 block"><Moment format="YYYY/MM/DD">{ latestNewsArticle.date }</Moment></span>
							<h3 className="text-2xl font-semibold text-white mb-4 leading-tight max-w-sm">{ latestNewsArticle.title }</h3>
							<span className="text-white font-semibold underline">Läs nyhet</span>
						</HeroNews>
					</Link>

					{ /* TODO fetch on client/add dynamic data */ }
					<Link className="w-full flex sm:w-6/12 lg:w-full no-underline" to={nextEvent.path}>
						<HeroEvent className="px-3 w-full md:px-6 py-8 md:py-12 bg-blue"> 
							<span className="text-grey-light mb-2 block"><Moment format="YYYY/MM/DD">{ nextEvent.acf.start_date }</Moment></span>
							<h3 className="text-2xl font-semibold text-white mb-4 leading-tight max-w-sm">{ nextEvent.title }</h3>
							<span className="text-white font-semibold underline">Gå till event</span>
						</HeroEvent>
					</Link>
			</div>
		</div>
	)
}

const HeroNews = styled.div`
	background: #123843;
	transition:background 0.25s;
	&:hover {
		background: ${darken(0.02, '#123843')};
	}
`

const HeroEvent = styled.div`
	background: #1B4350;
	transition:background 0.25s;
	&:hover {
		background: ${darken(0.02, '#1B4350')};
	}
`

const HeroTitle = styled.h1`
	@media(min-width:768px) {
		padding-left: calc((100vw - 1240px)/2);
	}
	text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
`

export default LandingHero
