import React from "react"

import EventCollection from "../components/EventCollection"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"

const EventsPage = () => (
  <Layout>
    <SEO title="Evenemang" />
    <div className="bg-blue-dark py-16">
    	
    </div>
	<div className="px-3 pt-8 wrapper mb-12">
		<EventCollection title="Kommande evenemang" />
	</div>
  </Layout>
)

export default EventsPage
