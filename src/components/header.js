import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
  	<div className="px-3 py-1 bg-grey flex md:justify-end">
  		<a className="md:ml-3 text-sm" href="#">Cookies</a>
  		<a className="md:ml-3 text-sm" href="#">Om oss</a>
  	</div>
  	<div className="px-3 py-3 flex flex-col md:flex-row md:justify-between">
	  	<Link className="no-underline text-black" to="/">
	  		<h1 className="font-semibold text-xl">Visithalland.com</h1>
	  	</Link>
	  	<nav>
	    	<Link className="md:ml-3" to="/NewsPage/">Nyheter</Link>
	    	<Link className="md:ml-3" to="/EventsPage/">Evenemang</Link>
	    </nav>
    </div>
  </header>
)

export default Header
