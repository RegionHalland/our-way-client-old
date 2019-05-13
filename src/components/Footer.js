import { Link } from "gatsby"
import React from "react"
import Fade from 'react-reveal/Reveal';
import slugify from 'slugify'
import { useHeaderNavigationItems } from '../hooks/useHeaderNavigationItems'
import { useSupportNavigationItems } from '../hooks/useSupportNavigationItems'

const Footer = () => {
  const { items: supportNavigationItems } = useSupportNavigationItems()
  const { items: headerNavigationItems } = useHeaderNavigationItems()

  return(
    <footer className="bg-blue-dark pt-8 pb-8 md:pb-16">
        <div className="px-3 wrapper flex flex-wrap flex-col md:flex-row md:justify-between">
          <Fade effect="fadeInUp" duration={500}>
          <div className="w-full md:w-4/12 mb-8">
            <Link className="no-underline text-white mb-3 block" to="/">
              <h1 className="font-semibold text-xl">Visithalland.com</h1>
            </Link>
            <p className="text-grey-light leading-normal">En reseguide som hjälper dig att hitta till det bästa i Halland. Visithalland.com utvecklas och drivs av Region Halland.</p>
          </div>
          </Fade>

          <div className="w-full md:w-6/12">
            <div className="flex flex-wrap flex-col md:flex-row justify-end">
              <Fade effect="fadeInUp" duration={500}>
                <div className="w-full md:w-6/12 mb-8">
                  <h4 className="text-blue-lightest text-lg mb-4">Sidor</h4>
                  <ul className="list-reset">
                    { headerNavigationItems.map(item =>
                      <li className="mb-3" key={item.wordpress_id}>
                        <Link className="text-white text-lg font-semibold no-underline" activeClassName="text-blue-lightest" to={slugify(item.title, {lower: true})}>{item.title}</Link>
                      </li>
                      )
                    }
                    { supportNavigationItems.map(item =>
                      <li className="mb-3" key={item.wordpress_id}>
                        <Link className="text-white text-lg font-semibold no-underline" activeClassName="text-blue-lightest" to={slugify(item.title, {lower: true})}>{item.title}</Link>
                      </li>
                      )
                    }
                  </ul>
                </div>
              </Fade>
              <Fade effect="fadeInUp" duration={500}>
                <div className="w-full md:w-6/12 mb-8">
                  <h4 className="text-blue-lightest text-lg mb-4">Följ oss</h4>
                  <ul className="list-reset">
                    <li className="text-white text-lg font-semibold mb-3">Facebook</li>
                    <li className="text-white text-lg font-semibold mb-3">Instagram</li>
                  </ul>
                </div>
              </Fade>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer
