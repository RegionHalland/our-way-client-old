import { Link } from 'gatsby'
import React from 'react'
import Fade from 'react-reveal/Reveal'
import styled from 'styled-components'
import Moment from 'react-moment'

const EventListItem = ({date, title}) => (
	<Fade effect="fadeInUp" duration={500}>
		<div className="flex flex-wrap w-full py-6 mb-2 items-center">
			<div className="mb-3 md:mb-0 w-full md:w-1/12">
				<span className="text-lg font-semibold"><Moment format="YYYY/MM/DD">{date}</Moment></span>
			</div>
			<div className="mb-3 md:mb-0 w-full md:w-8/12">
				<h3 className="text-xl md:text-2xl leading-normal">
					<StyledLink className="no-underline text-black" to="/EventSingle/">{title}</StyledLink>
				</h3>
			</div>
			<div className="mb-3 md:mb-0 w-full md:w-3/12 md:text-right">
				<Link className="text-black font-semibold" to="/EventSingle/">Gå till event</Link>
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

export default EventListItem
