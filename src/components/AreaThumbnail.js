import { Link } from "gatsby"
import React from "react"

const AreaThumbnail = () => (
  <div className="rounded flex flex-wrap">
  	<div className="w-4/12 md:w-3/12 bg-grey-light rounded">

  	</div>
  	<div className="w-8/12 md:w-9/12 px-2 md:px-3">
  		<h2 className="text-black mb-3 text-xl md:text-2xl">Stöd & Finansiering</h2>
  		<p className="leading-tight mb-3 text-grey-dark max-w-sm">Se vilka stöd du som företagare kan få för att utveckla din verksamhet</p>
    	<Link className="no-underline text-black font-semibold" to="/AreaSingle/">Läs mer</Link>
    </div>
  </div>
)

export default AreaThumbnail
