import React from "react"

import EventCollection from "../components/EventCollection"
import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import ArticleHero from "../components/ArticleHero"

const EventsPage = () => (
  <Layout>
    <SEO title="Evenemang" />
    <ArticleHero title="Workshop för Skördetid i Halland" label="Gå till event" date="27/09/19" />
	<div className="px-3 pt-8 wrapper mb-12">
		<EventCollection title="Kommande evenemang" />
	</div>
  </Layout>
)

export default EventsPage
