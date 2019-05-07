import React from "react"
import { Link } from "gatsby"
import EventListItem from "./EventListItem"

const EventCollection = ({ title }) => (
	<React.Fragment>
		<div className="flex justify-between items-center mb-6"> 
			<h2>{title}</h2>
			<Link className="text-black font-semibold" to="/EventsPage/">Alla events</Link>
		</div>
		<EventListItem />
		<EventListItem />
		<EventListItem />
		<EventListItem />
		<EventListItem />
		<EventListItem />
	</React.Fragment>
)

export default EventCollection
