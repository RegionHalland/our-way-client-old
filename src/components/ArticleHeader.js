import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import Moment from 'react-moment'

const ArticleHeader = ({title, date, image}) => (
	<React.Fragment>
		<div className="px-3 py-6 md:py-8 bg-blue-dark">
			<div className="wrapper">
				<span className="text-grey-light mb-2 block"><Moment format="YYYY/MM/DD">{date}</Moment></span>
				<h1 className="font-semibold text-white mb-4 leading-tight max-w-md text-2xl md:text-5xl">{title}</h1>
			</div>
		</div>
		{ image &&
			<div>
				<Img
					fluid={image.localFile.childImageSharp.fluid}
					objectFit="cover"
					objectPosition="50% 50%"
					alt={image.alt_text}>
				</Img>
			</div>
		}
	</React.Fragment>
)

export default ArticleHeader
