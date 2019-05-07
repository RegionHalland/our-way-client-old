import React from "react"
import { Link } from "gatsby"
import NewsListItem from "./NewsListItem"

const NewsCollection = () => (
	<React.Fragment>
		<div className="flex justify-between items-center mb-6"> 
			<h2>Nyheter</h2>
			<Link className="text-black font-semibold" to="/EventsPage/">Alla nyheter</Link>
		</div>
		<NewsListItem />
		<NewsListItem />
		<NewsListItem />
		<NewsListItem />
		<NewsListItem />
		<NewsListItem />
	</React.Fragment>
)

export default NewsCollection
