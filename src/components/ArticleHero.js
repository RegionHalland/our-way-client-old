import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'
import { darken } from 'polished'
import Moment from 'react-moment'

const ArticleHero = ({title, date, label, path}) => (
	<HeroEvent className="py-8 md:py-12 bg-blue-dark block no-underline" to={path}>
		<div className="wrapper">
			<div className="px-3">
				<span className="text-grey-light mb-2 block"><Moment format="YYYY/MM/DD">{date}</Moment></span>
				<h1 className="font-semibold text-white md:text-5xl mb-4 leading-tight max-w-md">{title}</h1>
				<span className="text-white font-semibold underline">{label}</span>
			</div>
		</div>
	</HeroEvent>
)


const HeroEvent = styled(Link)`
	background: #123843;
	transition:background 0.25s;
	&:hover {
		background: ${darken(0.02, '#123843')};
	}
`

export default ArticleHero
