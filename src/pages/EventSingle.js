import React from "react"

import Layout from "../layouts/Layout"
import SEO from "../components/Seo"
import EventInfo from "../components/EventInfo"
import ArticleHeader from "../components/ArticleHeader"
import ArticleContent from "../components/ArticleContent"

const EventSingle = () => (
  <Layout>
    <SEO title="Event" />
    <ArticleHeader />
	<div className="px-3 wrapper flex flex-wrap justify-between pt-8 mb-8">
		<div className="w-full lg:w-6/12 mb-8">
			<ArticleContent content="I sommarens inspirationsföreläsning hör du Mikael Ahlerup berätta och dela med sig av de viktigaste egenskaperna för att lyckas leda med framgång. Måste man vara chef för att leda andra? I det vinnande teamet arbetar man tillsammans och nyckeln är att veta hur man leder sig själv innan man leder andra! Mikael är en känd profil med erfarenheter av besöksnäringen och upplevelseindustrin som VD för Astrid Lindgrens Värld samt Orsa Grönklitt och har blivit utsedd till Årets chef av tidningen Chef. Den sju personer starka juryn som valde Mikael Ahlerup motiverade sitt val så här: ”För att han är en modern chef, prestigelös men bestämd. Han uttrycker strategin på ett sätt som alla förstår och har organiserat verksamheten därefter. Han har en förmåga att visa att alla är lika värda, oavsett var de jobbar. Samtidigt har han fört verksamheten genom stora förändringar med hjälp av sin framgångsrika ledarstil.” Idag arbetar Mikael som CEO på Lund Group Holding som är en av de största upplevelseaktörerna i Skandinavien. " />
		</div>
		<div className="w-full lg:w-5/12">
			<h3 className="mb-4">Information</h3>
			<EventInfo />
		</div>
    </div>
  </Layout>
)

export default EventSingle
