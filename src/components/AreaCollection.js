import React from 'react'
import AreaThumbnail from './AreaThumbnail'
import { useAllAreas } from '../hooks/useAllAreas'

const AreaCollection = () => {
	const allAreas = useAllAreas()

	return (
		<React.Fragment>
			<span className="font-semibold text-lg block mb-2 text-blue-lighter">Välkommen.</span>
			<h2 className="mb-6 md:text-3xl">Vad är du intresserad av?</h2>
			<div className="flex flex-wrap -mx-3">
				{ allAreas.map(node => {
					const { node: area } = node
					return (
						<div key={area.id} className="w-full md:w-4/12 mb-4 px-3">
							<AreaThumbnail title={area.name} label={`Läs mer om ${area.slug}`} excerpt={area.description} path={area.path} />
						</div>
					)})
				}
			</div>
		</React.Fragment>
	)
}



export default AreaCollection
