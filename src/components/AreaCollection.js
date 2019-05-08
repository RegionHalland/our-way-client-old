import React from "react"
import AreaThumbnail from "./AreaThumbnail"

import styled from "styled-components"

const AreaCollection = () => (
	<React.Fragment>
		<span className="font-semibold text-lg block mb-2 text-blue-lighter">Välkommen.</span>
		<h2 className="mb-6 md:text-3xl">Vad är du intresserad av?</h2>
		<div className="flex flex-wrap -mx-4 md:-mx-6">
			<div className="w-full md:w-4/12 mb-4">
				<AreaThumbnail title="Kunskap" label="Läs mer om kunskap" excerpt="Ta del av gästundersökningar, statistik och annat som är bra att veta."/>
			</div>
		</div>
	</React.Fragment>
)



export default AreaCollection
