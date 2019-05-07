import { Link } from "gatsby"
import React from "react"

const LandingHero = () => (
  <div className="flex flex-wrap mb-6">
	 <div className="w-full md:w-7/12 bg-grey-lighter">
		{/* TODO: Insert background image */}
	 </div>
	 <div className="w-full md:w-5/12">
		<div className="px-3 md:px-6 py-8 md:py-12 bg-blue-dark">
			<span className="text-grey-light mb-2 block">2019/08/18</span>
			<h3 className="text-2xl font-semibold text-white mb-4 leading-tight max-w-sm">Kattegattleden utsedd till Europas bästa cykelled</h3>
			<Link className="text-white font-semibold" to="/NewsSingle/">Läs nyhet</Link>
		</div>
		<div className="px-3 md:px-6 py-8 md:py-12 bg-blue"> 
			<span className="text-grey-light mb-2 block">2019/08/18</span>
			<h3 className="text-2xl font-semibold text-white mb-4 leading-tight max-w-sm">Mikael Ahlerup – Led dig själv innan du leder andra</h3>
			<Link className="text-white font-semibold" to="/NewsSingle/">Gå till event</Link>
		</div>
	 </div>
  </div>
)

export default LandingHero
