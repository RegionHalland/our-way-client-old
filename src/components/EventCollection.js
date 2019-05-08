import React from "react"
import { Link } from "gatsby"
import EventListItem from "./EventListItem"

const EventCollection = ({ title }) => (
	<React.Fragment>
		<div className="flex justify-between items-center mb-6"> 
			<h2 className="text-black md:text-3xl">{title}</h2>
			<Link className="text-black font-semibold" to="/EventsPage/">Alla events</Link>
		</div>
		<EventListItem title="Mikael Ahlerup – Led dig själv innan du leder andra" date="27/09" link="" />
		<EventListItem title="Mikael Ahlerup – Led dig själv innan du leder andra" date="20/09" link="" />
		<EventListItem title="Mikael Ahlerup – Led dig själv innan du leder andra" date="12/09" link="" />
	</React.Fragment>
)

export default EventCollection
