import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer className="bg-blue-dark pt-8 pb-8 md:pb-16">
    <div className="px-3 wrapper flex flex-wrap flex-col md:flex-row md:justify-between">
      <div className="w-full md:w-4/12 mb-8">
        <Link className="no-underline text-white mb-3 block" to="/">
          <h1 className="font-semibold text-xl">Visithalland.com</h1>
        </Link>
        <p className="text-grey-light leading-normal">En reseguide som hjälper dig att hitta till det bästa i Halland. Visithalland.com utvecklas och drivs av Region Halland.</p>
      </div>

      <div className="w-full md:w-6/12">
        <div className="flex flex-wrap flex-col md:flex-row justify-end">
          <div className="w-full md:w-6/12 mb-8">
            <h4 className="text-blue-lightest text-lg mb-4">Sidor</h4>
            <ul className="list-reset">
              <li className="text-white text-lg font-semibold mb-3">Kunskap</li>
              <li className="text-white text-lg font-semibold mb-3">Kunskap</li>
              <li className="text-white text-lg font-semibold mb-3">Kunskap</li>
              <li className="text-white text-lg font-semibold mb-3">Kunskap</li>
              <li className="text-white text-lg font-semibold mb-3">Kunskap</li>
            </ul>
          </div>
          <div className="w-full md:w-6/12 mb-8">
            <h4 className="text-blue-lightest text-lg mb-4">Följ oss</h4>
            <ul className="list-reset">
              <li className="text-white text-lg font-semibold mb-3">Facebook</li>
              <li className="text-white text-lg font-semibold mb-3">Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
