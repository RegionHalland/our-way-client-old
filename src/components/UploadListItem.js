import React from "react"

const UploadListItem = ({ resource }) => (
	<div className="py-4 flex items-center justify-between border-t border-grey-light">
  		<a target="_blank" className="block font-semibold text-black text-lg" href={resource.file.url.localFile.publicURL}>{resource.file.name}</a>
  		<span className="uppercase text-sm font-semibold text-grey-dark align-right">{resource.file.subtype} - {resource.file.url.localFile.prettySize}</span>
  	</div>
)

export default UploadListItem
