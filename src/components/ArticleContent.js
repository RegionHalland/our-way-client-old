import React from 'react'
import styled from 'styled-components'
import ReactHtmlParser from 'react-html-parser'

const ArticleContent = ({content}) => (
	<ArticleContentInner className="text-grey-darkest leading-relaxed max-w-md">
		{ ReactHtmlParser(content) }
	</ArticleContentInner>
)

const ArticleContentInner = styled.div`
	p {
		margin-bottom:1.5rem;
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
			font-size:1.5rem;
			font-weight:bold;
			line-height:1.4;
		}
		cite {
			
		}
	}

	a {
		word-break: break-all;
	}

	h2 {
		font-size:1.25rem;
		line-height:1.25;
		margin-bottom:1rem;
	}

	h3 {
		font-size:1.15rem;
		line-height:1.25;
		margin-bottom:1rem;
	}

	h4 {
		font-size:1rem;
		line-height:1.25;
		margin-bottom:1rem;
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
