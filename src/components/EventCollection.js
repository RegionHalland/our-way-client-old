import React from "react"
import { Link } from "gatsby"
import EventListItem from "./EventListItem"

const EventCollection = ({ events, title }) => (
	<React.Fragment>
		<div className="flex justify-between items-center mb-6"> 
			<h2 className="text-black md:text-3xl">{title}</h2>
			<Link className="text-black font-semibold" to="evenemang">Alla events</Link>
		</div>
		{events.map(event => 
			<EventListItem 
				key={event.node.id} 
				title={event.node.title} 
				date={event.node.acf.start_date} 
				link={event.node.path} 
			/>
		)}
	</React.Fragment>
)

export default EventCollection
