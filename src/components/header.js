import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="p-3 flex justify-between">
  	<Link className="ml-3 no-underline text-black" to="/">
  		<h1 className="font-semibold text-base">Visithalland.com</h1>
  	</Link>
  	<nav>
    	<Link className="ml-3" to="/page-2/">Page 2</Link>
    </nav>
  </header>
)

export default Header
