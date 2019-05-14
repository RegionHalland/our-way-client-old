import React from "react"
import UploadList from "./UploadList"

const AreaUploads = ({ uploads }) => (
	<React.Fragment>
		<h2 className="mb-8">Dokument & resurser</h2>
		<div className="flex flex-wrap -mx-3">
			{ 
				uploads.map(list =>
					<div className="w-full md:w-6/12 px-3 mb-6">
						<UploadList list={list} />
					</div>
				)
	        }
		</div>
	</React.Fragment>
)

export default AreaUploads
