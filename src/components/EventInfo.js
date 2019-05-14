import React from "react"
import Moment from 'react-moment'

const EventInfo = ({ address, date, linkTitle, link }) => {
	// Remove ", Sverige" from address
	const splitAddress = address ? address.substr(0, address.lastIndexOf(',')) : 'Ej tillgängligt'
	
	return (
		<div className="p-6 bg-grey-lighter sticky pin-t rounded">
			<ul className="list-reset">
				<li className="mb-6 text-lg">
					<span className="font-semibold mr-2">Plats:</span>
					<span className="font-semibold">{splitAddress}</span>
				</li>
				<li className="mb-6 text-lg">
					<span className="font-semibold mr-2">Datum:</span>
					<span className="font-semibold">
						{date ? <Moment format="YYYY/MM/DD">{date}</Moment> : 'Ej tillgängligt'}
					</span>
				</li>
				<li>
					<a href={link} target="blank" rel="noopener noreferrer" className="inline-block no-underline text-white px-4 py-4 bg-blue rounded font-semibold">{linkTitle}</a>
				</li>
			</ul>
		</div>
	)
}


export default EventInfo
