import React from "react"
import { Link } from "gatsby"
import slugify from 'slugify'
import { useHeaderNavigationItems } from '../hooks/useHeaderNavigationItems'
import { useSupportNavigationItems } from '../hooks/useSupportNavigationItems'

const Header = ({ siteTitle }) => {
	const { items: supportNavigationItems } = useSupportNavigationItems()
	const { items: headerNavigationItems } = useHeaderNavigationItems()

	return (
		<header>
			<div className="bg-blue">
				<div className="py-2 md:py-2 px-3 wrapper flex md:justify-end">
					{supportNavigationItems.map( item => {
						return item.object === 'custom' ?
							<a key={item.wordpress_id} className="mr-3 md:mr-0 md:ml-3 text-xs md:text-sm no-underline text-grey-light" href="https://www.visithalland.com/om-oss">{item.title}</a>
							: <Link key={item.wordpress_id} activeClassName="text-white" className="mr-3 md:mr-0 md:ml-3 text-sm no-underline text-grey-light" to={item.object_slug}>{item.title}</Link>
						})
					}
				</div>
			</div>
			<div className="shadow-lg z-50 relative">
				<div className="px-3 py-5 flex flex-col md:items-center md:flex-row md:justify-between wrapper">
					<Link className="no-underline text-black mb-4 md:mb-0" to="/">
						<h1 className="font-semibold text-xl">Visithalland.com</h1>
					</Link>
					<nav>
						{ headerNavigationItems.map(item =>
							<Link key={item.wordpress_id} activeClassName="text-blue-lighter" className="mr-6 md:mr-0 md:ml-6 text-black no-underline font-semibold" to={slugify(item.title, {lower: true})}>{item.title}</Link>)
						}
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
