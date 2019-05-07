import React from "react"
import AreaThumbnail from "./AreaThumbnail"

const AreaCollection = () => (
	<div>
		<h2 className="mb-4">Vad är du intresserad av?</h2>
		<div className="flex flex-wrap -mx-3">
			<div className="w-full md:w-6/12 px-3 mb-4">
				<AreaThumbnail />
			</div>
			<div className="w-full md:w-6/12 px-3 mb-4">
				<AreaThumbnail />
			</div>
			<div className="w-full md:w-6/12 px-3 mb-4">
				<AreaThumbnail />
			</div>
			<div className="w-full md:w-6/12 px-3 mb-4">
				<AreaThumbnail />
			</div>
			<div className="w-full md:w-6/12 px-3 mb-4">
				<AreaThumbnail />
			</div>
		</div>
	</div>
)

export default AreaCollection
