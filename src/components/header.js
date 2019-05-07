import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
  	<div className="bg-blue">
      <div className="py-1 md:py-2 px-3 wrapper flex md:justify-end">
  		  <a className="mr-2 md:mr-0 md:ml-3 text-sm no-underline text-grey-light" href="https://www.visithalland.com/kakor">Cookies</a>
  		  <a className="mr-2 md:mr-0 md:ml-3 text-sm no-underline text-grey-light" href="https://www.visithalland.com/om-oss">Om oss</a>
        <a className="mr-2 md:mr-0 md:ml-3 text-sm no-underline text-grey-light" href="https://www.visithalland.com/">Visithalland</a>
      </div>
  	</div>
    <div className="shadow-lg z-50 relative">
    	<div className="px-3 py-5 flex flex-col md:items-center md:flex-row md:justify-between wrapper">
  	  	<Link className="no-underline text-black mb-4 md:mb-0" to="/">
  	  		<h1 className="font-semibold text-xl">Visithalland.com</h1>
  	  	</Link>
  	  	<nav>
  	    	<Link activeClassName="text-blue-lighter" className="mr-6 md:mr-0 md:ml-6 text-black no-underline font-semibold" to="/NewsPage/">Nyheter</Link>
  	    	<Link activeClassName="text-blue-lighter" className="mr-6 md:mr-0 md:ml-6 text-black no-underline font-semibold" to="/EventsPage/">Evenemang</Link>
  	    </nav>
      </div>
    </div>
  </header>
)

export default Header
