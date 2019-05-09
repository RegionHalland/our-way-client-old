import React from 'react'
import { Link } from 'gatsby'
import NewsListItem from './NewsListItem'
import { useAllNews } from '../hooks/useAllNews'

const NewsCollection = ({ title }) => {
	const allNews = useAllNews()

	return (
		<React.Fragment>
			<div className="flex justify-between items-center mb-6"> 
				<h2 className="md:text-3xl">{title}</h2>
				<Link className="text-black font-semibold" to="/EventsPage/">Alla nyheter</Link>
			</div>
			{ allNews.map(node => {
					const { node: newsItem } = node
					const featured_media = newsItem.featured_media
					return <NewsListItem key={newsItem.id} title={newsItem.title} date={newsItem.date} path={newsItem.path} featured_media={featured_media} />
				})
			}
		</React.Fragment>
	)
}

export default NewsCollection
