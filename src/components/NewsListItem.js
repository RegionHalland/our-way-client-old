import { Link } from "gatsby"
import React from "react"

const NewsListItem = () => (
  <div className="flex flex-wrap w-full mb-6 sitems-center">
  	<div className="mb-3 md:mb-0 h-32 bg-grey-light w-full md:w-3/12">

	</div>
	<div className="w-full md:w-9/12 md:px-4">
		<span className="text-grey-dark mb-2 block">2019/08/18</span>
		<h3 className="text-xl md:text-2xl mb-3 max-w-sm">Kattegattleden utsedd till Europas bästa cykelled</h3>
		<Link className="text-black font-semibold" to="/NewsSingle/">Läs mer</Link>
	</div>
  </div>
)

export default NewsListItem
