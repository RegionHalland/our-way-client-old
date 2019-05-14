import React from "react"
import UploadListItem from "./UploadListItem"

const UploadList = ({ list }) => (
	<React.Fragment key={list.uploads_group.wordpress_id}>
		<h3 className="mb-3">{list.uploads_group.title}</h3>
			{ 
			list.uploads_group.files.map(resource =>
				<UploadListItem resource={resource} />
			)
        }
    </React.Fragment>
)

export default UploadList
