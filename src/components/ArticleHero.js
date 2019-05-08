import React from "react"
import { Link } from "gatsby"

const ArticleHero = ({title, date, link, label}) => (
	<React.Fragment>
		<div className="px-3 py-8 md:py-12 bg-blue-dark">
			<div className="wrapper">
				<span className="text-grey-light mb-2 block">{date}</span>
				<h1 className="font-semibold text-white mb-4 leading-tight max-w-sm">{title}</h1>
				<Link className="text-white font-semibold" to="/EventSingle/">{label}</Link>
			</div>
		</div>
	</React.Fragment>
)

export default ArticleHero
