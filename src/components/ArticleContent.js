import React from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'

const ArticleContent = ({content}) => (
	<ArticleContentInner className="text-grey-darkest leading-relaxed">
		{ ReactHtmlParser(content) }
	</ArticleContentInner>
)

const ArticleContentInner = styled.div`
	p {
		
	}

	img {
		max-width:100%;
		vertical-align:bottom;
	}
`

export default ArticleContent
