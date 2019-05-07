import React from "react"
import AreaThumbnail from "./AreaThumbnail"

const AreaCollection = () => (
	<React.Fragment>
		<h2 className="mb-6">Vad är du intresserad av?</h2>
		<div className="flex flex-wrap -mx-3">
			<div className="w-full md:w-6/12 px-3 mb-6">
				<AreaThumbnail />
			</div>
			<div className="w-full md:w-6/12 px-3 mb-6">
				<AreaThumbnail />
			</div>
			<div className="w-full md:w-6/12 px-3 mb-6">
				<AreaThumbnail />
			</div>
			<div className="w-full md:w-6/12 px-3 mb-6">
				<AreaThumbnail />
			</div>
			<div className="w-full md:w-6/12 px-3 mb-6">
				<AreaThumbnail />
			</div>
		</div>
	</React.Fragment>
)

export default AreaCollection
