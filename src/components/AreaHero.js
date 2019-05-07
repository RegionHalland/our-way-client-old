import { Link } from "gatsby"
import React from "react"

const AreaHero = () => (
  <div className="flex flex-wrap mb-8 md:flex-row-reverse">
	<div className="w-full md:w-7/12 min-h-8 bg-grey-lighter">
		{/* TODO: Insert background image */}
	</div>
	<div className="w-full md:w-5/12 bg-blue flex py-8 md:py-32 px-3 items-center md:justify-center">
		<h1 className="text-white text-4xl">Kunskap</h1>
	</div>
  </div>
)

export default AreaHero
