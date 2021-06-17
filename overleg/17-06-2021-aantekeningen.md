# Verslag 12e expertgroepbijeenkomst
17 juni 2021

## Agenda: 
1. Modelleerprincipes samenhangende objectenregistratie: 
	- Bespreking van de resterende punten uit het Modelleerprincipes document (waar we in de vorige bijeenkomst niet aan toe kwamen). Dat zijn dus: principes 3 en 4, en de richtlijnen.
	- Bespreken stand van zaken omtrent de github discussies over de principes die vorige keer zijn behandeld.
	- Zie https://geonovum.github.io/disgeo-imsor/modelleerprincipes. 

Aanwezig: Pano, Dick, Annemiek, Niels, Rik, Linda, Lennart, Gabriella.

# Gedetailleerde aantekeningen van het gesprek

**Principes:**

**P3:**
- Pano: als je dit principe niet toepast moet je elke eigenschap uitpluizen om te bepalen waar het over gaat [wanneer je informatie wil gebruiken in een eigen context). Dan kun je het ook niet gemakkelijk gebruiken op een geautomatiseerde manier. Wel is een van de implicaties van dit principe dat het leidt tot een genormaliseerd informatiemodel.
- Lennart: maar in MIM houden we daarom het conceptueel en logisch model gescheiden. In een conceptueel model zou je dit uit elkaar moeten kunnen houden [intrinsieke vs andere eigenschappen], maar in een logisch model wil je misschien misschien dingen samenschuiven omdat het handiger is in de implementatie. Ik ben het eens met de stelling en rationale, de uitleg is mooi, alleen zullen er zeker mensen zijn die niet blij worden van deze uitwerking. 
- Een alternatieve benadering zou zijn om van elk attribuut aan te geven of het een attribuut is wat onderdeel is van het object dat je ermee beschrijft. 
- Rik: zijn de IDs ook hetzelfde? 
- Pano: voor nu niet, het idee is dat we dit later wel realiseren.
- Niels: dit raakt wel aan de kern van hoe we het met z'n allen voor ons zien [de samenhang] - is de SOR een registratie, een laag over andere registraties? Ik had eigenlijk verwacht dat in de Architectuurbeschrijving hier al meer richting aan zou worden gegeven. 
- Rik: en dan zie ik veel verbanden met de "verwantschapslaags" uit het UOI project.
- Pano: let wel op dat het UOI idee fundamenteel anders is - met zo'n laag geef je relaties weer tussen informatieobjecten, SOR probeert een ID toe te kennen aan objecten in de werkelijkheid. 
- Niels: in de nauwere context was ik er van uitgegaan dat er een beweging zou komen om de huidige registraties samen te laten komen in één registratie. We hebben een overgangsstrategie hiervoor nodig, maar hier wordt ook een scenario geschetst waarbij de registraties kunnen blijven bestaan (waarop een verwantschapslaag kan worden gerealiseerd).
- Lennart: volgens mij is het heel duidelijk dat het niet de bedoeling is dat het één registratie wordt.
- Dick: ik schat in dat het stapsgewijs gaat gebeuren, zodat we uiteindelijk [ver in de toekomst] wel een SOR hebben en geen onderliggende registraties. Maar op beleidsniveau moet het nog helder worden hoe dit zich gaat ontwikkelen. 
- Lennart: als het in de werkelijkheid om hetzelfde ding gaat en mensen dit willen weten, lijkt me het een goed principe om het op deze manier te modelleren - en daarvoor is het nodig dat je moet weten wat bij het object hoort (intrinsiek) en wat niet. Je heb verschillende perspectieven waarmee je naar het object kijkt, het lijkt me moeilijk om dit in elkaar te schuiven.
- Linda: dus iedereen is het eens met dit principe?
- Lennart: alleen wat betreft de implicaties zou ik nog 1 of 2 alternatieven verzinnen.

**P4**
- Lennart: in MIM is hier uitgebreid over gesproken. Sommige registraties hebben geen begrippenkader, hebben deze dan pech? Ik heb alleen bezwaar tegen 1:1 begrippen mappen naar modelelementen, je zou ook meerdere begrippen kunnen relateren aan modelelementen.
Dit principe heeft meer nuance nodig, het is waarschijnlijk niet handig om voor elk modelelement een begrip aan te wijzen.
- Dick: het is handig om een pas-toe-of-leg-uit toe te passen.

**Richtlijnen:**

**R1**
Prima richtlijn, geen discussies
- Pano: je zou dit ook kunnen zeggen over de herkomst en brongegevens. Als je dit zou toevoegen heb je al veel te pakken, als je kijkt naar de huidige modellen van de basisregistraties.
- Lennart: Dit is te toetsen met BAG inhoud, dat document een audittrail is/waar de data te vinden is die geleidt heeft tot aanpassing van de registratie. Als ze zeggen, klopt, is geen eigenschap van een object, dan is deze meteen gevalideerd door inhoud.

**R2**
Dit principe is toegevoegd om de issues rond meervoudige typering te vermijden, maar hier is nog discussie over.
- Rik: grappig dat ik net uit discussies kom [met ...?] en daar wordt dit niet gewaardeerd (specialisaties in types stoppen), dus daar probeer ik echt iets anders te doen. En ik vraag me af of dit gaat rijmen met de ontologie wereld. 
- Lennart: snap het ook niet, alleen omdat het in de techniek een beetje moeilijk is, kan ik het opeens niet in het informatiemodel doen. Wat NEN3610 doet is dat je dit wel mag doen, maar dat in de taxonomische relaties de attributen van de generalisatie niet worden meegenomen.
- Rik: ik zit nu ook in een traject waarbij ik imgeo/cbnl/crow dingen in elkaar moet schuiven, dan werkt dit niet. 
- Pano: ik heb geen probleem met het schrappen van deze richtlijn. Ik ben alleen bang dat we moeten uitleggen hoe je het moet implementeren als je geen meervoudige overerving gebruikt.
**Note: Overerving is een andere discussie dan het groeperen van typeringen onder een noemer. Deze twee issues moeten we uit elkaar houden.**

**R3**
- Pano: er is nog onduidelijkheid over het gebruik van gegevensgroeptype, we maken een issue aan bij MIM. Voor nu is het waarschijnlijk handiger om deze richtlijn weg te laten. 
- Lennart: hier hoort ook bij, in een datatype zet je geen kenmerken van een object. Als dat toegevoegd wordt, kan ik wel meer met R3. 

**Github discussies**
- Pano: We hebben ook nog wat discussies gehad, misschien is het handig om daar nog even naar te kijken. 

Een van de discussies ging over de definitie van "gegeven": er is reactie op het woord "uitgedrukt", dit is te registratief. Vastgesteld lijkt beter, maar we moeten wat beter naar alternatieven kijken.

Een andere discussie gaat over de definitie van metadata. Wat we nog kunnen doen is de verschillende soorten metadata benoemen/definiëren.

Nog een andere discussie gaat over wat de SOR uiteinlijk is/wordt. 
- Pano: in mijn optiek maken we een begrippenkader, conceptueel model en logisch model.
- Niels: eens.
- Pano: dan moeten we het nu nog verduidelijken.
- Lennart: dit leest alsof je informatie naar die registratie gaat sturen, zo lees ik "koppelen". Maar met het idee ben ik het wel eens. Misschien "samen te stellen" gebruiken?  Of je kunt zeggen dat we hier de objecttypes beschrijven, en de onderliggende implicatie is dat we die gegevens moeten hebben als voorzieningen. Los van of het wel/niet registraties zijn.
- Linda: ik zit nog na te denken, hieruit [uit de Github discussie] volgt dat je een begrippenmodel/conceptueel model en logisch model nodig hebt. Kun je uitleggen waarom?
- Pano: het was eigenlijk een reactie op een comment van Lennart.
- Lennart: ik hou er van als we semantische informatiemodellen maken - hoe meer je dit doet, hoe meer mensen het begrijpen. Maar we hebben als streven voor de SOR dat het samenhang brengt op het niveau van logische modellen. Als je je tot de huidige modellen richt, dan ben je beperkt in wat er nu staat en wat mogelijk is vanuit deze modellen. Het alternatief is dat je vertrekpunt een semantisch model is, en dan kijk je hoe je de huidige modellen hierop kunt afstemmen. 
- Linda: wij doen dus het eerste vooral: ons uitgangspunt zijn de logische modellen die al bestaan. Natuurlijk is het iets genuanceerder, want de waarheid ligt ergens in het midden. 
- Dus we willen niet "redden wat te redden valt", maar wel het maximale eruit halen. Samengevat: "Voorziening ik wil jouw informatie niet zomaar, ik wil jouw informatie volgens dit model (van de SOR)".

Bij de discussie over U2 is het belangrijk om te vermelden dat, als iets niet in de (nationale) standaarden staat, dat we het wel proberen terug te brengen naar deze standaarden - we gaan geen standaard voor de SOR maken. 

Bij de discussie over versiemodellering zegt Dick dat het een taak voor BZK is om hier rekening mee te houden. Het is niet de bedoeling dat in de wet wordt vastgesteld welke objecttypes in de SOR komen, anders heb je wetswijzigingen nodig en dan kunnen we niet meer spreken van een levend model.
- Lennart: de vertaalspecificaties van de modellen naar de SOR moet je ook heel goed beheren. 

U5 roept nog wat vraagtekens op, het blijft een lastige kwestie. En we kunnen wellicht beter over balans spreken, niet prioriteiten. Punt 4 moeten we anders verwoorden, nu lijkt het een kritiek op dit process. 
- Rik: er zit een verschil tussen zuiver modelleren en je committeren aan standaarden voor het modelleren. Zuiver modelleren is een mooi streven. 
- We zouden kunnen zeggen: voor het modelleren zelf doen we geen concessies. Wanneer er toch iets is wat niet in de standaarden (NEN3610/NEN2660/etc) beschreven wordt, dan gaan we een afweging maken van de belangen van verschillende groepen om tot een beslissing te komen.

# Acties
- Voor P1-P4: kijken of we links kunnen opnemen naar MIM, deze principes worden (zij het impliciet) aanbevolen.
- Voor P3: alternatieven onderzoeken voor de uitwerking, en implicaties hiervan ook in kaart brengen. Hierbij kunnen we beginnen bij het idee van Lennart, waarbij we metadata tags gebruiken.
- Voor P4: principe aanpassen - "1:1" moet waarschijnlijk weg; onderzoeken voor welke specifieke modelelementen dit principe van toepassing is; kijken of we een "pas-toe-of-leg-uit" regel kunnen toepassen.
- Voor R1: comment van Lennart verwerken
- Voor R2: checken dat twee issues (overerving/groeperen van typeringen) niet door elkaar heen lopen
- Voor R3: kijken of we deze weghalen, of de comment van Lennart erin verwerken ("geen datatype gebruiken om eigenschappen van objecttypes te modelleren")
- Voor github discussies: kijken naar definitie "gegeven"; verschillende soorten metadata benoemen ipv één definitie; U5 herformuleren/Punt 4 aanpassen; etc - check de aantekeningen voor alle to do's. 
