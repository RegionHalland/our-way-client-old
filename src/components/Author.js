import React from "react"
import styled from 'styled-components'

const Author = () => (
  <div className="flex-nowrap flex max-w-full">
	<div className="h-24 w-24 bg-grey-light rounded-full mb-2"></div>
  	<AuthorContentContainer className="px-2 md:px-3">
  		<span className="text-black font-semibold mb-1 block text-lg md:text-xl">Anna Bengtsson</span>
  		<span className="block mb-2">Strateg</span>
  		<a className="block mb-2 truncate" href="mailto:email@example.com">anna.bengtsson@regionhalland.se</a>
  		<a className="block mb-2 truncate" href="tel:0730936515">0730936515</a>
    </AuthorContentContainer>
  </div>
)


const AuthorContentContainer = styled.div`
	width: calc(100% - 6rem);
`

export default Author
