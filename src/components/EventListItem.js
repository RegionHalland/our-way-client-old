import { Link } from "gatsby"
import React from "react"

const EventListItem = () => (
  <div className="flex flex-wrap w-full py-6 mb-2 items-center">
  	<div className="mb-3 md:mb-0 w-full md:w-1/12">
		<span className="text-lg font-semibold">21/07</span>
	</div>
	<div className="mb-3 md:mb-0 w-full md:w-8/12">
		<h3 className="text-xl md:text-2xl leading-normal">Mikael Ahlerup – Led dig själv innan du leder andra</h3>
	</div>
	<div className="mb-3 md:mb-0 w-full md:w-3/12 md:text-right">
		<Link className="text-black font-semibold" to="/EventSingle/">Gå till event</Link>
	</div>
  </div>
)

export default EventListItem
