import React from 'react'
import NewsCollection from '../components/NewsCollection'
import Layout from '../layouts/Layout'
import SEO from '../components/Seo'
import ArticleHero from '../components/ArticleHero'
import { useLatestNewsArticle } from '../hooks/useLatestNewsArticle'

const NewsPage = () => {
	const {
		node: {
			title,
			date,
			path
		} 
	} = useLatestNewsArticle()

	return (
		<Layout>
			<SEO title="Nyheter" />
			<ArticleHero title={title} label="Läs mer" date={date} path={path} />
			<div className="px-3 md:px-6 lg:px-3 pt-8 wrapper mb-12">
				<NewsCollection title="Fler nyheter" />
			</div>
		</Layout>
	)
}

export default NewsPage
