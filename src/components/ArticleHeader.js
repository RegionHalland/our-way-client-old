import React from "react"

const ArticleHeader = () => (
	<React.Fragment>
		<div className="px-3 py-8 md:py-12 bg-blue-dark">
			<div className="wrapper">
				<span className="text-grey-light mb-2 block">2019/08/18</span>
				<h1 className="font-semibold text-white mb-4 leading-tight max-w-sm">Kattegattleden utsedd till Europas bästa cykelled</h1>
			</div>
		</div>
		<div className="h-64 py-32 bg-grey-light">
			{/* TODO: Insert image if there is one */}
		</div>
	</React.Fragment>
)

export default ArticleHeader
