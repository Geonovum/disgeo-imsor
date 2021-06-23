# Verslag 12e expertgroepbijeenkomst
17 juni 2021

## Agenda: 
1. Modelleerprincipes samenhangende objectenregistratie: 
	- Bespreking van de resterende punten uit het Modelleerprincipes document (waar we in de vorige bijeenkomst niet aan toe kwamen). Dat zijn dus: principes 3 en 4, en de richtlijnen.
	- Bespreken stand van zaken omtrent de github discussies over de principes die vorige keer zijn behandeld.
	- Zie https://geonovum.github.io/disgeo-imsor/modelleerprincipes. 

Aanwezig: Pano, Dick, Annemiek, Niels, Rik, Linda, Lennart, Gabriella.

# Gedetailleerde aantekeningen van het gesprek

## P3: alleen directe eigenschappen op een objecttype

- Pano: als je dit principe niet toepast moet je elke eigenschap uitpluizen om te bepalen waar het over gaat (wanneer je informatie wil gebruiken in een eigen context). Dan kun je het ook niet gemakkelijk gebruiken op een geautomatiseerde manier. Wel is een van de implicaties van dit principe dat het leidt tot een genormaliseerd informatiemodel.
- Lennart: dus wat je bedoelt is dat je bv bij BAG pand en BGT pand, omdat ze over hetzelfde ding gaan, de eigenschappen van die twee kan optellen bij elkaar. Maar in MIM houden we daarom het conceptueel en logisch model gescheiden. In een conceptueel model zou je dit uit elkaar moeten kunnen houden [intrinsieke vs andere eigenschappen], maar in een logisch model wil je misschien dingen samenschuiven omdat het handiger is in de implementatie. Ik ben het eens met de stelling en rationale, de uitleg is mooi, alleen zullen er zeker mensen zijn die niet blij worden van deze uitwerking. 
- Lennart: een alternatieve benadering zou zijn om van elk attribuut aan te geven of het een echte eigenschap is van het object dat je ermee beschrijft. 
- Rik: zijn de IDs ook hetzelfde? 
- Pano: voor nu niet, het idee is dat we dit later wel realiseren.
- Niels: dit raakt wel aan de kern van hoe we het met z'n allen voor ons zien [de samenhang] - is de SOR een registratie, een laag over andere registraties? Ik had eigenlijk verwacht dat in de Architectuurbeschrijving hier al meer richting aan zou worden gegeven. 
- Rik: en dan zie ik veel verbanden met de "verwantschapslaags" uit het UOI project.
- Pano: let wel op dat het UOI idee fundamenteel anders is - met zo'n laag geef je relaties weer tussen informatieobjecten, SOR probeert een ID toe te kennen aan objecten in de werkelijkheid. 
- Niels: in de nauwere context was ik er van uitgegaan dat er een beweging zou komen om de huidige registraties samen te laten komen in één registratie. We hebben een overgangsstrategie hiervoor nodig, maar hier wordt ook een scenario geschetst waarbij de registraties kunnen blijven bestaan (waarop een verwantschapslaag kan worden gerealiseerd).
- Lennart: volgens mij is het heel duidelijk dat het niet de bedoeling is dat het één registratie wordt.
- Dick: ik schat in dat het stapsgewijs gaat gebeuren, zodat we uiteindelijk [ver in de toekomst] wel een SOR hebben en geen onderliggende registraties. Maar op beleidsniveau moet het nog helder worden hoe dit zich gaat ontwikkelen. 
- Lennart: als het in de werkelijkheid om hetzelfde ding gaat en mensen dit willen weten, lijkt me het een goed principe om het op deze manier te modelleren - en daarvoor is het nodig dat je weet wat bij het object hoort (intrinsiek) en wat niet. Je heb verschillende perspectieven waarmee je naar het object kijkt, het lijkt me moeilijk om dit in elkaar te schuiven.
- Linda: dus iedereen is het eens met dit principe? Lennart en Niels beamen dit. Niemand zegt het er niet mee eens te zijn. 
- Lennart: alleen wat betreft de implicaties zou ik nog 1 of 2 alternatieven verzinnen.

## P4: ieder informatiemodel-element heeft bijbehorend begrip
- Pano legt P4 uit. Er moet altijd een begrip zijn in een begrippenkader voor ieder element. Andersom hoeft niet, je hebt soms extra begrippen nodig om begrippen in context te plaatsen, of bv voor wetgeving, die je niet in het IM nodig hebt.
- Lennart: in MIM is hier uitgebreid over gesproken. Sommige registraties hebben geen begrippenkader, hebben deze dan pech? Ik heb alleen bezwaar tegen 1:1 begrippen mappen naar modelelementen, je zou ook meerdere begrippen kunnen relateren aan modelelementen. Of een modelelement hebben dat geen corresponderend begrip heeft. Bv zakelijk recht bij kadaster heeft te maken met zakelijk recht maar ook met eigendom. Of een BAG OpenbareRuimte: heeft een relatie met plein, straat, enz. 
- Pano: dat zijn dan relaties die je in het begrippenkader zelf zou kunnen leggen. 
- Lennart: neem je dan voor elk IM element een 'informatie-elementconcept' op? Dan is het wel 1 op 1. 
- Pano: Er zouden idd wel dit soort situaties kunnen zijn, in 90% van de gevallen zal de relatie wel 1 op 1 te leggen zijn. 
- Rik: hoe zit het met relaties en attributen? hebben die ook een corresponderend begrip? En enumeraties, domeinwaarden?
- Pano: we zullen dit expliciet maken. 
- Lennart: Sommige waardelijst waarden corresponderen niet met begrippen , bv een limitatieve lijst van getallen.
- Dick: het is handig om een pas-toe-of-leg-uit toe te passen. Dus: leg altijd een relatie met een begrip, tenzij het echt niet kan, en leg dit dan uit.
- Conclusie: Dit principe heeft meer nuance nodig, het is waarschijnlijk niet handig om voor elk modelelement een begrip aan te wijzen. Ook moeten we voor elk type modelelement expliciet maken of het een relatie met een begrip heeft (en wat de kardinaliteit van die relatie is).

## R1: scheidt metadata
Prima richtlijn, geen discussies

Opmerkingen:
- Pano: je zou dit ook kunnen zeggen over de herkomst en brongegevens. Als je dit zou toevoegen heb je al veel te pakken, als je kijkt naar de huidige modellen van de basisregistraties.
- Lennart: Dit is te toetsen met BAG inhoud, dat document een audittrail is/waar de data te vinden is die geleidt heeft tot aanpassing van de registratie. Als ze zeggen, klopt, is geen eigenschap van een object, dan is deze meteen gevalideerd door inhoud.

## R2: consistent gebruik van objecttypering
Dit principe is toegevoegd om de issues rond meervoudige typering te vermijden, omdat software hier vaak niet goed mee om kan gaan; maar hier is nog discussie over.

- Rik: in bepaalde modelleerkringen niet wordt gewaardeerd om classificatie in een type attribuut te stoppen, dus daar probeer ik echt iets anders te doen. En ik vraag me af of dit gaat rijmen met de ontologie wereld / sectoren die semantisch modelleren. 
- Lennart: als het probleem in de techniek zit, is dit nog geen reden om het in het informatiemodel niet te doen. Bovendien is het in linked data geen probleem maar juist gangbaar. In NEN3610 is het toegestaan, in het afgeleide technisch model wordt dit dan op een bepaalde manier opgelost. 
- Rik: bij voorkeur R2 toepassen vind ik niet erg, maar ik zou meervoudige typering niet willen uitsluiten bij voorbaat. Ik zit nu ook in een traject waarbij ik imgeo/cbnl/crow dingen in elkaar moet schuiven, dan werkt dit niet. 
- Pano: ik heb geen probleem met het schrappen van deze richtlijn. Ik ben alleen bang dat we moeten uitleggen hoe je het moet implementeren in een omgeving zonder meervoudige overerving.
- Lennart: de gangbare manier is dan om de attributen van een van de parents naar de child te kopiëren en het overervingslijntje door te knippen. Bij kadaster doen we dit waar nodig.

**Note: Overerving is een andere discussie dan het groeperen van typeringen onder een noemer. Deze twee issues moeten we uit elkaar houden.**

## R3: voorlopig geen gegevensgroeptype gebruiken
Deze richtlijn hebben we maar kort besproken in afwachting van het aanmelden van een issue hierover bij MIM. 

- Pano: er is nog onduidelijkheid over het gebruik van gegevensgroeptype, we maken een issue aan bij MIM.  
- Lennart: hier hoort ook bij: in een datatype zet je geen kenmerken van een object. Als dat toegevoegd wordt, kan ik wel meer met R3. 

## Github discussies over eerder besproken deel van modelleerprincipes
- Pano: We hebben ook nog wat discussies gehad, misschien is het handig om daar nog even naar te kijken. 

Een van de discussies ging over de [definitie van "gegeven"](https://github.com/Geonovum/disgeo-imsor/discussions/49): er is reactie op het woord "uitgedrukt", dit is te registratief. Ingewonnen? te procesgericht. Vastgesteld? misschien te sterk, maar heeft lichte voorkeur. Deze is voor niemand blokkerend, maar we moeten wat beter naar alternatieven kijken. Misschien helpt het om dit te vragen aan de Inhoud mensen.

Een andere discussie gaat over de [definitie van metadata](https://github.com/Geonovum/disgeo-imsor/discussions/50). Deze definitie moet breder, want je hebt metadata op allerlei niveaus. Het is dus beter om een definitie op te nemen van alle soorten metadata die we hanteren. 

We hebben ook gesproken over [modelleerprincipe P1](https://github.com/Geonovum/disgeo-imsor/discussions/57), "het informatiemodel bevordert samenhang", en over wat de SOR dan uiteindelijk is/wordt. Hier is de vorige keer over gediscussieerd en op github ook. Het laatste punt was dat er, binnen de getrapte sporenaanpak, een begrippenmodel, conceptueel model en logisch model gemaakt moeten worden, (die laatste 2 liggen wel dicht bij elkaar) waarbij niet gezegd is dat dit model ook in een registratie geïmplementeerd wordt, of een laag over de registraties heen wordt. 
- Pano: in mijn optiek maken we een begrippenkader, conceptueel model en logisch model.
- Niels: eens.
- Pano: dan moeten we het nu nog verduidelijken. Wat er nu staat in 4.1 moet dus wel uitgebreid worden.
- Lennart: samenhang waartussen? Beter expliciet maken. Dit leest nu alsof je informatie naar die registratie gaat sturen, zo lees ik "koppelen". Maar met het idee ben ik het wel eens. Misschien "samen te stellen" gebruiken?  Of je kunt zeggen dat we hier de objecttypes beschrijven, en de onderliggende implicatie is dat we die gegevens moeten hebben als voorzieningen. Los van of het wel/niet registraties zijn.
- Linda: ik zit nog na te denken, hieruit [uit de Github discussie] volgt dat je een begrippenmodel/conceptueel model en logisch model nodig hebt. Kun je uitleggen waarom?
- Pano: het was eigenlijk een reactie op een comment van Lennart. Dit volgde meer uit de opmerkingen waarin een semantisch model genoemd werd. Ik probeerde in MIM termen te beschrijven wat we maken. 
- Lennart: ik hou er van als we semantische informatiemodellen maken - hoe meer je dit doet, hoe meer mensen het begrijpen. Maar we hebben als streven voor de SOR dat het samenhang brengt op het niveau van logische modellen. Als je je tot de huidige modellen richt, dan ben je beperkt in wat er nu staat en wat mogelijk is vanuit deze modellen. Het alternatief is dat je vertrekpunt een semantisch model is, en dan kijk je hoe je de huidige modellen hierop kunt afstemmen. 
- Linda: wij doen dus het eerste vooral: ons uitgangspunt zijn de logische modellen die al bestaan. En dan kijken wat er in die modellen te verbeteren valt zodat er meer samenhang komt. En dus niet: een prachtig informatiemodel  maken en dan hopen dat de registraties worden samengevoegd of zichzelf gaan aanpassen. Het informatiemodel zal een soort geharmoniseerd model worden waar registraties hun eigen model op kunnen mappen; en zoveel mogelijk of in ieder geval waar nodig en mogelijk passen we de bronregistraties aan. Natuurlijk is het iets genuanceerder, want de waarheid ligt ergens in het midden. 
- Dus we willen niet "redden wat te redden valt", maar wel het maximale eruit halen. Samengevat: "Voorziening ik wil jouw informatie niet zoals je die zelf hebt opgeslagen, ik wil jouw informatie volgens dit model (van de SOR)".

Bij de [discussie over U2](https://github.com/Geonovum/disgeo-imsor/discussions/53) bleek dat iedereen het wel over dit uitgangspunt eens is. Wel is het belangrijk om te vermelden dat, als iets niet in de (nationale) standaarden staat, dat we het wel proberen terug te brengen naar deze standaarden. Noot 1 dus veralgemeniseren naar alle standaarden. 

[U3: bruikbaar in verschillende paradigma's](https://github.com/Geonovum/disgeo-imsor/discussions/55): hier is de vorige keer discussie over gevoerd. Het hiërarchische paradigma (denk hierbij aan bv XML, JSON) is toegevoegd. We moeten alleen nog even checken bij Paul (die afwezig was) wat hij met zijn opmerking over validatie bedoelt in deze context.

Bij de discussie [U4 Informatiemodel is voldoende flexibel en uitbreidbaar](https://github.com/Geonovum/disgeo-imsor/discussions/56) ging het over het release management van een uitbreidbaar model en zegt Dick dat het een taak voor BZK is om hier rekening mee te houden. Het is niet de bedoeling dat in de wet wordt vastgesteld welke objecttypes in de SOR komen of zelfs het informatiemodel in de wet wordt opgenomen, anders heb je wetswijzigingen nodig om iets toe te voegen, te verwijderen of te wijzigen en dan kunnen we niet meer spreken van een levend model.

Verder: 
- Het idee van een flexibele standaard vindt men mooi. Noem het een 'levende standaard', niet 'permanent BETA'. 
- Het is een mooi uitgangspunt. De uitvoering / concretisering is nog wel onduidelijk. 
- Versie/releasebeheer gaat eigenlijk niet over het informatiemodel zelf maar is meer een randverschijnsel dat afgesproken moet worden.
- Lennart: de vertaalspecificaties van de modellen naar de SOR moet je ook heel goed beheren. Er zal een afhankeljikheid zijn met de vertaalspecs van registraties van/naar de SOR. De SOR moet ook niet een blok aan het been zijn van aanpalende modellen als die iets wijzigen. 

[U5 afgestemd op doelgroepen gebruik](https://github.com/Geonovum/disgeo-imsor/discussions/43) roept nog wat vraagtekens op. Hier is nog geen consensus over. We kunnen wellicht beter over balans spreken, niet prioriteiten. Punt 4 moeten we anders verwoorden, nu lijkt het een kritiek op dit process. 
- Rik: er zit een verschil tussen zuiver modelleren en je committeren aan standaarden voor het modelleren. Modelleren volgens de standaarden is belangrijk en zou geen lage prioriteit moeten hebben. Gebruikers denken vaak aan hun belang in nauwere zin terwijl standaarden uiteindelijk ook in het belang van gebruikers zijn.
- Linda: dat we ons committeren aan standaarden staat al in een ander uitgangspunt. ik bedoelde met dit uitgangspunt niet dat we alles wat gebruikers roepen, voorrang geven bij het modelleren. Wij maken daarin wel een eigen afweging. Maar ik maak geen informatiemodel om een mooi informatiemodel te maken, het is geen doel op zich. Ik doe het uiteindelijk omdat gebruikers het nodig hebben. En wil het daarom bijvoorbeeld niet onnodig complex maken of er inhoud aan toevoegen die gebruikers niet nodig hebben.

We zouden kunnen zeggen: voor het modelleren zelf doen we geen concessies. Wanneer er toch iets is wat niet in de standaarden (NEN3610/NEN2660/etc) beschreven wordt, dan gaan we een afweging maken van de belangen van verschillende groepen om tot een beslissing te komen.

# Acties
- Voor P1-P4: kijken of we links kunnen opnemen naar MIM, deze principes worden (zij het impliciet) aanbevolen.
- Voor P3: alternatieven onderzoeken voor de uitwerking, en implicaties hiervan ook in kaart brengen. Hierbij kunnen we beginnen bij het idee van Lennart, waarbij we metadata tags gebruiken.
- Voor P4: principe aanpassen - "1:1" moet waarschijnlijk weg; onderzoeken voor welke specifieke modelelementen dit principe van toepassing is; kijken of we een "pas-toe-of-leg-uit" regel kunnen toepassen.
- Voor R1: comment van Lennart verwerken
- Voor R2: checken dat twee issues (overerving/groeperen van typeringen) niet door elkaar heen lopen
- Voor R3: kijken of we deze weghalen, of de comment van Lennart erin verwerken ("geen datatype gebruiken om eigenschappen van objecttypes te modelleren")
- Voor github discussies: kijken naar definitie "gegeven"; verschillende soorten metadata benoemen ipv één definitie; U5 herformuleren/Punt 4 aanpassen. 
