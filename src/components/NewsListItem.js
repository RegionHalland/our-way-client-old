import { Link } from 'gatsby'
import React from 'react'
import Moment from 'react-moment'
import Img from "gatsby-image/withIEPolyfill"

const NewsListItem = ({ title, date, path, featured_media }) => (
	<div className="flex flex-wrap w-full mb-6 sitems-center">
		<div className="mb-3 md:mb-0 h-32 bg-grey-light w-full md:w-3/12">
			<Img className="h-full" fluid={featured_media.localFile.childImageSharp.fluid} />
		</div>
		<div className="w-full md:w-9/12 md:px-4">
			<span className="text-grey-dark mb-2 block">
				<Moment format="YYYY/MM/DD">{ date }</Moment>
			</span>
			<h3 className="text-xl md:text-2xl mb-3 max-w-sm leading-tight">{ title }</h3>
			<Link className="text-black font-semibold" to={path}>Läs mer</Link>
		</div>
	</div>
)

export default NewsListItem
