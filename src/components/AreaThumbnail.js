import { Link } from "gatsby"
import React from "react"

const AreaThumbnail = ({title, excerpt, link, label}) => (
  	<div className="w-full p-4 md:p-6">
  		<h2 className="text-black mb-3 text-xl md:text-2xl">{title}</h2>
  		<p className="leading-normal mb-3 text-grey-dark max-w-sm pr-6">{excerpt}</p>
    	<Link className="text-blue font-semibold" to="/AreaSingle/">{label}</Link>
    </div>
)

export default AreaThumbnail
