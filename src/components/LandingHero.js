import { Link } from "gatsby"
import React from "react"

const LandingHero = () => (
  <div className="bg-grey flex flex-wrap mb-6">
	 <div className="w-full md:w-7/12">

	 </div>
	 <div className="w-full md:w-5/12">
		<div className="px-3 py-16 bg-grey-lighter">
			<Link to="/NewsSingle/">Nyhet</Link>
		</div>
		<div className="px-3 py-16 bg-grey-light">
			<Link to="/EventSingle/">Event</Link>
		</div>
	 </div>
  </div>
)

export default LandingHero
