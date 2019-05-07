import React from "react"

import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import AreaHero from "../components/AreaHero"

const AreaSingle = () => (
  <Layout>
    <SEO title="Områdessida" />
    <AreaHero />
    <div className="px-3 wrapper flex flex-wrap justify-between mb-8">
		<div className="w-full md:w-6/12">
			<h2 className="mb-3">Om kunskap</h2>
			<p className="text-grey-darkest leading-normal">Vår kunskapsstrategi handlar om att samla in och sprida kunskap om den halländska gästen. Vi tar fram kunskapsunderlag som destinationer och företag kan använda som stöd för utveckling och tillväxt och som kan hjälpa dem att fatta rätt beslut i sin yrkesroll. Detta gör vi bland annat genom att presentera gästnattsstatistik, omvärldsbevaka och en gång om året presentera en turismekonomisk rapport om besöksnäringens omsättning i Halland. Tillsammans med företagen, destinationerna och turismforskningsinstitutet Etour utvecklar vi en kunskapsdatabas om den halländska besökaren. Syftet med databasen är att ge ett kunskapsunderlag som aktörerna inom besöksnäringen kan använda som stöd för utveckling och tillväxt.</p>
		</div>
		<div className="w-full md:w-5/12">
			<h2 className="mb-3">Frågor? Kontakta oss.</h2>
		</div>
    </div>
  </Layout>
)

export default AreaSingle
