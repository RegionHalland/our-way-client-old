import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

const Author = ({ firstName, lastName, phoneNumber, workTitle, email, profileImage}) => (
	<div className="flex-nowrap flex max-w-full">
		<div className="h-24 w-24 bg-grey-light rounded-full mb-2">
			{profileImage &&
				<Img
					fluid={profileImage.localFile.childImageSharp.fluid}
					objectFit="cover"
					objectPosition="50% 50%"
					alt={profileImage.alt_text}
					className="rounded-full">
				</Img>
			}
		</div>
		<AuthorContentContainer className="px-2 md:px-3">
			<span className="text-black font-semibold mb-1 block text-lg md:text-xl">{firstName} {lastName}</span>
			<span className="block mb-2">{workTitle}</span>
			<a className="block mb-2 truncate text-blue" href={`mailto:${email}`}>{email}</a>
			<a className="block mb-2 truncate text-blue" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
		</AuthorContentContainer>
	</div>
)


const AuthorContentContainer = styled.div`
	width: calc(100% - 6rem);
`

export default Author
