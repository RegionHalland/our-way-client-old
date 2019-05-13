import { Link } from 'gatsby'
import React from 'react'
import Moment from 'react-moment'
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import Fade from 'react-reveal/Reveal';


const NewsListItem = ({ title, date, path, featured_media }) => (
	<Fade effect="fadeInUp" duration={500}>
		<div className="flex flex-wrap w-full mb-6 sitems-center">
			<div className="mb-3 md:mb-0 bg-grey-light w-full md:w-3/12 overflow-hidden rounded">
				<Img className="h-full" fluid={featured_media.localFile.childImageSharp.fluid} />
			</div>
			<div className="w-full md:w-9/12 md:px-4">
				<span className="text-grey-dark mb-2 block">
					<Moment format="YYYY/MM/DD">{ date }</Moment>
				</span>
				<h3 className="text-xl md:text-2xl mb-3 max-w-sm leading-normal">
					<StyledLink className="no-underline text-black" to={path}>{ title }</StyledLink>
				</h3>
				<Link className="text-black font-semibold" to={path}>Läs mer</Link>
			</div>
		</div>
	</Fade>
)


const StyledLink = styled(Link)`
	background-image: linear-gradient(180deg,transparent 65%,#B9D7E0 0);
    background-size: 0 100%;
    transition: background-size .4s ease;
    background-repeat: no-repeat;
    &:hover {
    	background-size: 100% 100%;
    }
`

export default NewsListItem
