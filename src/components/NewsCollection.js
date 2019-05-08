
import React from "react"
import { Link } from "gatsby"
import NewsListItem from "./NewsListItem"

const NewsCollection = ({ title }) => (
	<React.Fragment>
		<div className="flex justify-between items-center mb-6"> 
			<h2 className="md:text-3xl">{title}</h2>
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