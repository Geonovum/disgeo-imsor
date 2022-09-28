# Verslag 25e expertgroepbijeenkomst
20 september 2022

Aanwezig: Pano Maria, Linda van den Brink, Gerard Trouborst, Dick Krijtenburg, Frank Terpstra, Rik Opgenoort, Jesse Bakker, Annemiek Droogh

Onderwerp: 
- Conceptueel en logisch model
- Typerende waardelijsten en subklassen

## Introductie
Het is voor het eerst sinds enige tijd dat er weer een expertgroep is. We zijn in de tussentijd vooral inhoudelijk met modelleren bezig geweest van het onderwerp Bestuurlijke gebieden. Er zijn maandelijkse sprintreviews. 

Voor het eerst is namens Kadaster Jesse Bakker aanwezig. Hij is informatiemodelleur en heeft dit hiervoor bij de politie gedaan. Vervangt Lennart. Normaal gaat Thies Mesdag ook aanhaken maar die kon vandaag niet. 

Over conceptueel model (CM) en logisch model (LM)
- Pano doet de presentatie. 
- Rik over conceptueel versus logisch: hij maakt ook dit onderscheid, met name omdat hij het CM met name gebruikt als praatplaat met domein experts en het LM meer het domein is van de technicus. In het logisch model maakt hij bindingen met SHACL en RDFS etc. De implementatie is bij hem altijd in linked data. Er is vaak wel een verschil in definities op CM en LM niveau, omdat dit laatste niveau meer aangescherpt is. 
- Pano: In de MIM werkgroep wordt op dit moment gediscussieerd over CM en LM. De denkwijze op dit moment is: een conceptueel model in MIM kun je dan eigenlijk zien als de OWL kant, en een logisch model meer als de SHACL kant. Dan is een CM in MIM dus al meer dan een praatplaat, maar wel al een volwaardig uitgewerkt model. 
- Jesse: bij het Kadaster hebben we nog geen modellen die zowel op conceptueel als logisch niveau beschikbaar zijn. Eigenlijk alleen logische modellen. Tot nu toe altijd de registratie gemodelleerd. Ook vanuit de wens om dubbel beheer te voorkomen. Wel zie je vaak dat er een versimpeld diagrammetje wordt gevisualiseerd voor besprekingen met domeinexperts. De documentatie, aka definities van begrippen, zitten in het model van begrippen, maar bij kadaster wordt vaak de beschrijving van modelelementen ook nog dubbel in het model zelf opgenomen in EA.
- Annemiek: wij hebben tot nu toe ook alleen maar 1 model. 
- Rik: waarom allebei gedaan? Pano: uitgangspunt was MIM, wij wilden het hele plaatje rond maken dus begrippenkader, conceptueel model en logisch model. Meervoudig beheer is wel een issue.
- Linda: bij de BRO werd het LM uit het CM gegenereerd, misschien kunnen we nog eens kijken of daar voordeel uit te behalen is. Frank: dit kunnen we eens vragen aan Han Welmer. 
- Linda: in ieder geval zou een goede stap zijn om de definities uit het CM te halen en te volstaan met de verwijzing naar het begrip uit het begrippenkader. 
- Pano: het zou mooi zijn als imvertor geconfigureerd kon worden om definities automatisch op te halen van een bepaalde plek. > dit is iets om bij de imvertor gebruikersgroep of via een andere juiste weg neer te leggen bij Armatiek. 
- Zou het LM ook gedocumenteerd moeten worden? Jesse: wij hebben geen CM/LM onderscheid, maar wel informatiemodel/productmodel onderscheid; productmodellen zijn ook gedocumenteerd, maar hierbij maken we zoveel mogelijk hergebruik van het informatiemodel.

Over typerende waardelijsten en subklassen
- Pano licht toe wat een typerende of classificerende waardelijst is. 
- In zowel het CM als het LM hebben we een superklasse/subklasse structuur van de bestuurlijke gebieden en de meer specifieke soorten daarvan; en bovendien een typerende waardelijst waarin dezelfde specifieke soorten zijn opgenomen, plus een afgeleid attribuut `type`. In een productmodel / meer specifiek logisch model kan je dan kiezen.
- Reden is dat je in APIs versus linked data verschillende manieren gebruikt om subtypen aan te geven. 
- Rik: wij maken geen subklasse als er geen onderscheidend kenmerk opgenomen is. Maar zeggen wel dat het geoorloofd is om een subklasse ervan te maken en daarbij extra kenmerken op te nemen. Heeft dit toevallig pas bij semantics conferentie aangekaart. 
- Jesse: hoe vaak de typerende lijst verandert speelt ook een rol. Soft typing lijst kun je gemakkelijker aanpassen dan subklassen. Ik zou dit niet bij alle informatiemodellen doen. Bestuurlijke gebiedtypen zullen niet zo snel veranderen. 
- Pano: MIM heeft ook een relatiesoort 'is classificerend', maar die is nog niet zo duidelijk dat je ook kan afleiden dat er dan een subklasse is. Als dat duidelijk was zou je in je IM kunnen volstaan met een typerende waardelijst. 
- Rik: in de MIM LD binding is dat dacht ik wel opgenomen. 
- Pano: maar nog niet in andere implementaties, en in de algemene beschrijving. Actie Pano: MIM issue hierover aanmaken met input van Rik. 
- Rik: we hadden een geval met 1600 soorten verkeersborden, die hebben we uiteindelijk niet als klassen gemodelleerd vanwege de hoeveelheid, terwijl ze dat eigenlijk wel zijn. 
- Jesse: in EA zou het misschien wel kunnen als je er een apart package van maakt dat je apart versioneert. 

Vragenrondje
- Rik: hoe ziet de verdere planning hiervan eruit? CROW vroeg zich af of er al budget voor aansluiting op DiSGeo moet worden opgenomen [voor volgend jaar]. 
- Dick: BZK is nog bezig governance te regelen. We gaan bestuurlijke gebieden verder afronden in kleine stapjes, beginnende met gemeenten en provincies. Daarna gaan we werken aan een volgend onderwerp en dat wordt waarschijnlijk gebouwen. ALs je nu budget gaat regelen ben je te vroeg; het zou goed zijn om aan te geven bij BZK dat duidelijkheid gewenst is. 

