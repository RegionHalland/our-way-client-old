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
		margin-bottom:0.75rem;
	}
	
	figure {
		img {
			max-width:100%;
			width:100%;
			margin-bottom:0.25rem;
			border-radius:4px;
			vertical-align:bottom;
		}
		figcaption {
			font-style:italic;
			margin-bottom:1rem;
		}
	}

	blockquote {
		border-left:5px solid #B9D7E0;
		padding-left:2rem;
		margin: 2rem 0rem;
		p {
			font-size:1.75rem;
			font-weight:bold;
			line-height:1.25;
		}
		cite {
			
		}
	}

	.wp-block-embed__wrapper {
		border-radius:5px;
		overflow:hidden;
		margin-bottom:1rem;
	}

	iframe {
		max-width:100%;
		width:100%;
		vertical-align:bottom;
	}


	img {
		max-width:100%;
		width:100%;
		border-radius:4px;
		vertical-align:bottom;
	}
`

export default ArticleContent
