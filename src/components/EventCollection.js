import { Link } from "gatsby"
import React from "react"
import EventListItem from "./EventListItem"

const EventCollection = () => (
	<div>
		<h2 className="mb-4">Evenemang</h2>
		<div className="flex flex-wrap">
			<EventListItem />
			<EventListItem />
			<EventListItem />
			<EventListItem />
			<EventListItem />
			<EventListItem />
		</div>
	</div>
)

export default EventCollection
