import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import Img from "gatsby-image/withIEPolyfill"
import ReactHtmlParser from 'react-html-parser'
import { useThemeOptions } from '../hooks/useThemeOptions'
import { useLatestNewsArticle } from '../hooks/useLatestNewsArticle'

const LandingHero = () => {
	const { title: heroTitle, background_image } = useThemeOptions()
	const { node: latestNewsArticle } = useLatestNewsArticle()

	return (
		<div className="flex flex-wrap mb-8">
			<div className="w-full md:w-7/12 min-h-8 flex items-center px-3 py-6 relative">
				<HeroTitle className="text-3xl md:text-4xl leading-tight lg:text-5xl text-white z-10">{ ReactHtmlParser(heroTitle) }</HeroTitle>
				<Img
					fluid={background_image.localFile.childImageSharp.fluid}
					objectFit="cover"
					objectPosition="50% 50%"
					alt={background_image.alt_text}
					style={{position: 'absolute'}}
					className="h-full w-full pin-l pin-t"
				/>				
			</div>
			<div className="w-full md:w-5/12">
				<HeroNews className="px-3 md:px-6 py-8 md:py-12 bg-blue-dark">
					<span className="text-grey-light mb-2 block">2019/08/18</span>
					<h3 className="text-2xl font-semibold text-white mb-4 leading-tight max-w-sm">{ latestNewsArticle.title }</h3>
					<Link className="text-white font-semibold" to={latestNewsArticle.path}>Läs nyhet</Link>
				</HeroNews>

				<HeroEvent className="px-3 md:px-6 py-8 md:py-12 bg-blue"> 
					<span className="text-grey-light mb-2 block">2019/08/18</span>
					<h3 className="text-2xl font-semibold text-white mb-4 leading-tight max-w-sm">Mikael Ahlerup – Led dig själv innan du leder andra</h3>
					<Link className="text-white font-semibold" to="/EventSingle/">Gå till event</Link>
				</HeroEvent>
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
