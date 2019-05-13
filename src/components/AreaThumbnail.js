import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import Fade from 'react-reveal/Reveal';

const AreaThumbnail = ({title, excerpt, label, path}) => (
	<Fade effect="fadeInUp" duration={500}>
	  	<div className="w-full py-4 md:py-6">
	  		<h2 className="mb-3 text-xl md:text-2xl">
	  			<StyledLink className="text-black no-underline font-semibold" to={path}>{title}</StyledLink>
	  		</h2>
	  		<p className="leading-normal mb-3 text-grey-dark max-w-sm pr-6">{excerpt}</p>
	    	<Link className="text-blue font-semibold" to={path}>{label}</Link>
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

export default AreaThumbnail
