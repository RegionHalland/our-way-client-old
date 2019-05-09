import React from "react"

import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import Author from "../components/Author"
import ArticleHeader from "../components/ArticleHeader"
import ArticleContent from "../components/ArticleContent"

const NewsSingle = () => (
  <Layout>
    <SEO title="Nyhet" />
    <ArticleHeader title="Kattegattleden vinner årets cykelled" date="2018/09/12" />
	<div className="px-3 wrapper flex flex-wrap justify-between pt-8 mb-8">
		<div className="w-full lg:w-6/12 mb-8">
			<ArticleContent content="Vår kunskapsstrategi handlar om att samla in och sprida kunskap om den halländska gästen. Vi tar fram kunskapsunderlag som destinationer och företag kan använda som stöd för utveckling och tillväxt och som kan hjälpa dem att fatta rätt beslut i sin yrkesroll. Detta gör vi bland annat genom att presentera gästnattsstatistik, omvärldsbevaka och en gång om året presentera en turismekonomisk rapport om besöksnäringens omsättning i Halland. Tillsammans med företagen, destinationerna och turismforskningsinstitutet Etour utvecklar vi en kunskapsdatabas om den halländska besökaren. Syftet med databasen är att ge ett kunskapsunderlag som aktörerna inom besöksnäringen kan använda som stöd för utveckling och tillväxt." />
		</div>
		<div className="w-full lg:w-5/12">
			<h3 className="mb-4">Skrivet av</h3>
			<Author />
		</div>
    </div>
  </Layout>
)

export default NewsSingle
