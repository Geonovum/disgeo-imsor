# Verslag 14e expertgroepbijeenkomst
29 juli 2021

## Agenda: 
1. Stavaza [Modelleerprincipes](https://geonovum.github.io/disgeo-imsor/modelleerprincipes/): voor nu vastgesteld.
2. Metadata: 
	- [inventarisatie functionele eisen](https://github.com/Geonovum/disgeo-imsor/blob/master/issues/60-metadata/inventarisatie_metadata_sor.xlsx)
	- [inventarisatie standaarden](https://github.com/Geonovum/disgeo-imsor/blob/master/issues/60-metadata/metadata-standaarden.md)
	- [framework](https://github.com/Geonovum/disgeo-imsor/blob/master/issues/60-metadata/metadata-framework.md) voor het specificeren van metadata in de SOR
	- [analyse gegevenskwaliteit](https://github.com/Geonovum/disgeo-imsor/blob/master/issues/60-metadata/datakwaliteit-nora-iso19157.md)

Aanwezig: Dick, Gabriella, Pano, Rik, Niels, Linda
<!-- afwezig: Paul, Lennart, Jantien -->

# Gedetailleerde aantekeningen van het gesprek
Gabriella laat inventarisatie functionele eisen zien. 
- Niels: sommige eisen hangen ook aan architectuur, oa de autorisatieaspecten. Maar bronverwijzing ook wel in zekere zin; hangt af van of losse registraties geaggregeerd worden of dat er een samenhangende registratie komt. 
- Pano: ook metadata op attribuutniveau raakt aan architectuur
- Linda: we gaan alle eisen verder uitwerken zodat we een correcte interpretatie van de eisen 

Linda presenteert standaarden inventarisatie
- Niels: aanvullend nog MDTO bekijken en misschien standaarden van KOOP zoals OWMS. Actie Hans Overbeek contacten met de vraag of er relevante standaarden zijn
- Rik: Dublin Core gebruik ik zelf wel veel. Vooral voor data rond documenten.
- Pano: Kan inderdaad op niveau van informatieobjectn en voor brondocumenten.
- Rik: Vroeger ook wel met Fabio en Doco gewerkt. 
- Pano: Gaat misschien wat ver voor de SOR.
- Linda: Het is nog wel een uitdaging om de juiste standaard te kiezen voor het juiste metadataniveau. Voor informatiemodelniveau wordt het MIM plus waarschijnlijk een uitbreiding voor kwaliteitseisen, maar daar komen we nog op. 

Gabriella presenteert metadata framework. 
- Metadata op informatiemodel niveau: we volgen MIM; alleen aanvullend op MIM willen we Kwaliteit uitsplitsen. En moeten een oplossing zoeken voor het probleem dat je in MIM geen metadata van een superklasse kan overerven op subklassen (op klasseniveau, niet op objectniveau)
- Rik: misschien ga je er ook tegenaan lopen dat je naast hierarchische relaties ook decompositie relaties hebt. Bij IMBOR leggen we een lijst objecttypen en een lijst attributen vast; maar objecttypen hebben dan vaak decompositierelaties dus als het geheel al een attribuut heeft, hoeft het deel die niet ook te hebben, maar bij IMBOR moet je die dan dubbel opnemen.
- Metadata op datasetniveau: hier hebben we wat minder aandacht aan besteed tot nu toe. 
	- Rik: op dit niveau zijn met name die overheidsstandaarden van toepassing die ik net noemde. 
	- Linda: dataset metadata is in het kader van de SOR vooral metadata voor informatieproducten; voor ons pas later in scope. 
	- Dick: maar is de SOR zelf ook niet een dataset?
	- Pano: in DCAT is een dataset iets abstracts en zijn er distributies en services; informatieproducten zijn eerder distributies. We kunnen dus wel de SOR zelf als dataset beschrijven.
- Metadata op object- en attribuutniveau: hier gaat het bijvoorbeeld om bronverwijzingen en gerealiseerde kwaliteit. 
	- Pano gaat hier wat dieper op in. Begonnen met een analyse van PROV-O. Registratiegegevens object zou je knunen koppelen aan prov Entity. Vertaalt PROV daarbij naar Nederlands om het voor meer mensen toegankelijk te maken. Heeft nu ongeveer 20% van PROV in beeld, doel is om heel PROV in beeld te krijgen en dan te laten zien welke onderdelen van PROV van toepassing zijn. In PROV heb je Entiteit, Actor en Activiteit. In MDTO zie je dit ook ongeveer terug. Je kunt met PROV een heel audittrail van registratiegegevens modelleren. We moeten er wel voor waken dat het te complex wordt, maar het ziet er wel kansrijk uit. Ook beter naar MDTO kijken. 
	- Rik: belangrijke afweging is uiteindelijk of je iets wel of niet meeneemt, dwz de keuzes binnen een standaard om onderdelen wel of niet toe te passen. Dus belangrijk om rationale vast te leggen van keuzes die gemaakt zijn. 
	- Pano: ik ken het vooral uit de linked data wereld, zou het daarbuiten ook toegepast worden? 
	- Rik: ik zie wel relatie met MDTO en Dublin Core.
	- Niels: ik zie geen basis hierin voor wettelijke grondslag, gaat dat ook nodig zijn? 
	- Pano: ja. Je kan PROV daar ook wel voor toepassen maar niet zeker of dat lukt. Heeft MDTO daar een structuur voor? 
	- Niels: weet ik niet uit mijn hoofd maar zou goed kunnen. 
	- Linda: het lijkt ook op de idee van gebeurtenissen zoals je hebt ind e basisregsitraties. 
	- Pano: die nu nog via SOAP services worden uitgewisseld en waar je in de uitwisseling alleen een documentnummer van hebt. 
	- Linda: het is dus nog wel zaak om goed duidelijk te krijgen wat de functionele eis is: moet de audittrail nu op meer gestructureerde wijze in de SOR worden opgenomen? Dan is PROV interessant. 
	- Niels: wel scherp op zijn dat zo'n onderwerp als dit in kosten/baten analyse niet goed zou uitvallen.
	- Rik: toch belangrijk om eerst complete analyse te doen, later kun je versimpelen; dan weet je wel zeker dat je volledig bent. 

Rondvraag
- Rik: Gaat DisGeo IMGeo vervangen? 
- Dick: Tempo waarin en route waarlangs zijn van belang. Het is een geleidelijke doorontwikkeling. De idee is wel dat de huidige basisregistraties straks opgaan in de SOR. En dat de huidige registraties langzamerhand zullen ontwikkelen richting de SOR. 
- Linda: er zijn nog verschillende scenario's mogelijk. Of er blijven aparte registraties (die naar elkaar toe groeien) of het wordt er uiteindelijk één. Of er wordt heel veel in een semantische laag erbovenop gerealiseerd, en alleen dat wat niet 
- Rik: signaleert dat er wel wat verwarring heerst in de markt; waardoor softwareleveranciers bijvoorbeeld zeggen hun product niet meer door te ontwikkelen omdat 'disgeo imgeo gaat vervangen'.


# Acties
- Contact opnemen met Hans Overbeek over overheidsstandaarden voor metadata.