# Verslag 19e expertgroepbijeenkomst
3 november 2021

## Agenda
We gaan tijdens deze sessie in op het modelleren van waardelijsten
- Waardelijsten in geostandaarden: huidige praktijk
- Concept uitwerking modelleren van waardelijsten SOR + argumentatie

Aanwezig: Niels, Rik, Gabriella, Pano, Linda

## Gedetailleerde aantekeningen van het gesprek

Bij IMBOR willen ze de MIM methodiek gaan toe passen voor het uitwerken van waardelijsten. Een van de uitdagingen is de aansluiting op NEN2660-2 (deze wordt ook gebruikt als richtlijn), omdat dit niet precies matched met wat er in het MIM staat. 

Linda [presenteert een inventarisatie] over wat er in internationale standaarden over waardelijsten wordt gezegd en hoe deze worden gemodelleerd. We beginnen bij de ISO 19103, hierin wordt onderscheid gemaakt tussen enumeraties en uitbreidbare codelijsten die extern worden beheerd. 
- Niels: conceptueel gezien is zo'n uitbreidbare lijst heel mooi, maar in de implementatie minder - met types, types-plus. Dit zit in veel huidige modellen. In de praktijk zorgt zo'n lijst dus voor veel uitdagingen. 
- Linda:  INSPIRE heeft hier wel een oplossing voor bedacht. Ze maken ook gebruik van ISO 19103, en hebben daarnaast een codelist register waar een heel uitgebreid beheerregime op wordt uitgeoefend. In NEN3610:2021 (voor versie in consultatie, zie:) staat ook een paragraaf over waardelijsten. Het is alleen onduidelijk of waardes in waardelijsten concepten zijn of niet. Er wordt alleen ergens gezegd dat waardes identificaties van concepten zijn. 
- Rik: dus eigenlijk proberen ze de term van het concept te scheiden, hier zitten wij ook mee. Een groot probleem voor leveranciers is dat als waardes in waardelijsten aangepast worden ze dit ook moeten doorvoeren op implementatieniveau (en vaak hebben ze het datamodel al voorgeprogrammeerd). In IMBOR is de oplossing nu dat je een eigen extensie maakt en dat aandraagt voor generiek gebruik.

Pano [geeft een overzicht] van ons denken tot nu toe, over hoe we waardelijsten willen gaan modelleren in de SOR. We kijken hierbij ook weer naar de definities vanuit MIM en NEN3610: MIM is niet helemaal duidelijk over wat een waarde precies is, en in de NEN3610 zijn waardelijsten lijsten met woorden die je mag gebruiken als eigenschap van een object. Rik geeft aan dat het lastig wordt om de methode uit de NEN2660 toe te passen op het moment dat je codelijsten hebben (waar waardes dus extern gespecificeerd zijn). Over de scheiding tussen vocabulaire en ontologie zegt de NEN2660 verder niks.

- Pano: Vanuit de SOR is flexibiliteit een belangrijke eis - de inhoud van de lijst moet kunnen veranderen zonder dat het informatiemodel dit doet. De structuur van zo'n waarde moet onderdeel zijn van het informatiemodel: vanuit dit model moet je kunnen zeggen hoe zo'n waarde eruit ziet. Wat betreft hiërarchische lijsten, je zou de statussen uit de huidige modellen willen kunnen mappen naar de SOR statussen, zodat je een vraag kan stellen waarbij indirect wordt gekeken naar de onderliggende statussen in de losse registraties. Voor ons lijken referentielijsten dus het beste te passen, want je kunt de gegevensstructuur ervan beschrijven (middels de kenmerken van de lijst), terwijl je het beheer wel elders kan plaatsen - hiermee borgt je de flexibiliteit. Het verschil tussen codelijst en referentielijst is dat je bij een codelijst echt verwijst naar andere codes, terwijl je bij een referentielijst ook een soort samenvatting geeft van een objecttype als structuur van je lijst. Hiermee zorg je ervoor dat een lijst van instanties van dingen kan worden hergebruikt. Het geeft meer houvast dan een codelijst, omdat een verandering in de structuur van de lijst dan niet los staat van het informatiemodel (minder lastig kwa versionering).
Als voorbeeld: wanneer je een lijst (bv, gemeentelijst) wil toepassen die door anderen beheert wordt ga je in de SOR niet zeggen welke gemeentes er zijn - maar je zegt wel hoe die gegevens gestructureerd zijn en waar je de lijst met de beschrijving van de instanties kan vinden.
- Rik: je hebt de instanties nu apart gezet, maar staat het beheer van de waardelijsten ook los van het model?
- Pano: eigenlijk wil je dat het beheer van de waardelijsten dichter bij je informatiemodel ligt, want het begrippenkader gebruik je meestal voor andere doeleinden (hier wil je dus niet hetzelfde beheerregime op hebben, anders wordt het ook te complex). 
- Niels: kun je historie bijhouden als je dat met waardes in een waardelijst in skos doet?
- Pano: ja, maar je moet het skos vocab wel uitbreiden - zo kun je het tijdreis aspect realiseren. Het lijkt wel logisch om het beheer van waardes/waardelijsten apart te zetten.
- Rik: je begrippenkader is iets anders dan het beheer van de begrippen in je waardelijsten - het is puur toevallig dat je ze in skos registreert. 
- Pano: wat je wel wil voorkomen is dat je begrippen dubbel opneemt, maar dit zou je kunnen doen door bv skos:match relaties toe te passen. 
Er zijn twee aspecten die hier telkens aan bod komen: beheer en ontsluiting. We focussen ons voorlopig liever op de uitdagingen rondom beheer, aangezien je voor de ontsluiting andere oplossingen kunt bedenken om dingen weer logisch te aggregeren voor degenene die iets aanvragen. 
- Rik: bij IMBOR hebben we nu ook dat een term meerdere keren gebruikt wordt. Dan verwijzen we vanuit een term naar 2 verschillende dingen. Het zou dus kunnen zijn dat je een concept hebt wat je in je eigen model moet managen (met ID, historie, etc) waarbij je ook een verwijzing zou willen opnemen naar een term uit je begrippenkader. Omdat termen en concepten nu vermengd worden in waardelijsten en begrippenkaders kan dit niet. 
- Pano: voor mij is een term een eigenschap van een concept. 
- Rik: dit is handig voor het beheren van waardelijsten, maar kan wel een dubbele registratie betekenen.
- Niels: maar hier in dit voorbeeld kun je de term 'kantoorgebouw' alleen gebruiken in de context van jouw waardelijst. 
- Pano: niet perse, want je neemt ook een skos:match relatie op naar je begrippenkader. 
- Rik: eigenlijk moet je op waardelijstniveau heel strak gaan beheren - want begrippenkaders veranderen continu, die zijn dynamischer. Vanuit je waardelijst moet je kijken naar welke versies van begrippen je verwijst.
- Pano: maar vanuit nen3610 kun je niet vanuit een object/ding verwijzen naar een versie van een ander ding. 
- Rik: lijkt me een tekortkoming.
Om de discussie rondom beheer beter te kunnen voeren lijkt het verstandig om betekenisloze URIs aan te houden. 
- Rik: ik heb deze discussies ook gevoerd met leveranciers van IMBOR - vaak hebben ze alles voorgeprogrammeerd, dus bij aanpassingen aan waardelijsten moeten ze te veel veranderingen doorvoeren. Dat heeft veel impact op ons. Maar we hebben wel door dat de wereld die kant op beweegt. En hoewel we dus dit conventionele paradigma wel aandacht moeten geven, denk ik dat we binnen de SOR wel moeten aangeven dat we limitaties zien aan deze manier van werken.
- Niels: dit proberen we dan juist op te lossen door de historie van termen en concepten ook te registreren. Maar dit is weer een andere discussie. 
Ik denk dat je in dit traject het geheel aan informatiemodellen beheerbaar moet willen maken, en de implementatie is dan weer een ander vraagstuk. 
- Rik: [over het voorbeeld op de slide 'koppeling externe registratie'] dit is wel  complex om uit te leggen aan leveranciers, maar aangezien je vanuit de SOR vooral gebruikers wil ondersteunen zul je dit soort atomaire patronen wel moeten ondersteunen/aanbieden. Je zou kunnen kijken naar het afleiden van de relatie rechts [op de slide]. Als we in de SOR een apart begrippenkader hebben en waardelijsten met begrippen die hiervan losstaan, dan wordt het ingewikkelder wanneer je vanuit IMBOR wil verwijzen naar de SOR voor een subtype van iets wat in het waardelijst staat. 
- Koppeling tussen sectormodellen en het SOR model moet onderzocht worden, IMGeo-IMBOR verbinding is een relevant voorbeeld. 
