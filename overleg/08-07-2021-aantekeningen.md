# Verslag 13e expertgroepbijeenkomst
8 juli 2021

## Agenda: 
1. Modelleerprincipes samenhangende objectenregistratie: 
	- Bespreking van de openstaande commentaren en discussies behandelen om te proberen de openstaande discussies af te ronden en zoveel mogelijk van de uitgangspunten, principes en richtlijnen voorlopig vast te stellen.

Aanwezig: Pano, Lennart, Michel, Niels, Paul, Gabriella, Linda, Dick, Jan

## Ter voorbereiding
De vorige twee meetings hebben we alle onderdelen van de [modelleerprincipes](https://geonovum.github.io/disgeo-imsor/modelleerprincipes/) behandeld. 

Zie ook de verslagen:
- [27 mei](https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/27-05-2021-aantekeningen.md)
- [17 juni](https://github.com/Geonovum/disgeo-imsor/blob/master/overleg/17-06-2021-aantekeningen.md)

Tijdens deze 13e meeting zullen we de openstaande commentaren en discussies behandelen om te proberen de openstaande discussies af te ronden en zoveel mogelijk van de uitgangspunten, principes en richtlijnen voorlopig vast te stellen.

De volgende acties uit de vorige meeting zijn al verwerkt in het document:
- Voor P4: principe aanpassen - "1:1" moet waarschijnlijk weg; onderzoeken voor welke specifieke modelelementen dit principe van toepassing is; kijken of we een "pas-toe-of-leg-uit" regel kunnen toepassen.
- Voor R3: kijken of we deze weghalen, of de comment van Lennart erin verwerken ("geen datatype gebruiken om eigenschappen van objecttypes te modelleren")
- Voor github discussies: kijken naar definitie "gegeven"

Daarnaast zijn er nog [discussie-items](https://github.com/Geonovum/disgeo-imsor/discussions?discussions_q=label%3Amodelleerprincipes) waar je je mening op kunt geven.


# Gedetailleerde aantekeningen van het gesprek
Pano loopt door het document heen. 

## Definities
- Definitie van 'gegeven' gebruikt nu de term 'opgenomen'. 
	- Michel: mooie neutrale term. Maar 'eigenschap' vallen daar ook relaties / referenties onder? 
	- Ja, dat dekt allebei af. Goed bevonden.
- Definitie van 'metadata' was te beperkend, nu breder opgesteld.
	- Michel: het woord 'andere' is misschien overbodig. En hoe wordt 'registratie' hier bedoeld? 
	- Pano: zitten aspecten van beheer in, bv de SOR wordt een registratie, is net iets meer dan een dataset.
	- Paul: is de lijst uitputtend bedoeld? Pano: nee, een open lijst. Paul: dan moet je dat aangeven in de tekst. **[todo] ** 'zoals' toevoegen.
	- Met die aanpassing (zie todo) is de definitie akkoord.
	- Ook 'dataset series' noemen zoals NL profiel op ISO 19115 beschrijft? > Dit gaan we in de metadata inventarisatie meenemen maar nu niet in de definitie opnemen. Zie ook https://isotc211.geolexica.org/concepts/1356/#entry-lang-eng

## Uitgangspunten
- U1 ter vaststelling
	- Niels: eens met conclusie van Linda mbt de [discussie](https://github.com/Geonovum/disgeo-imsor/discussions/52); we zijn het wel over het uitgangspunt eens; alleen hebben nog discussie over het hoe.
	- Vastgesteld. 
- U2 is al vastgesteld, we hebben nog een opmerking in de Noot verwerkt; deze is veralgemeniseerd (was: opmerkingen worden terug gebracht naar MIM, nu naar alle relevante standaarden)
- U3 ter vaststelling
	- **[todo] ** 'hiërarchische' nog toevoegen in de titel
	- Pano: er was nog een opmerking van Paul over validatie.
	- Paul: je maakt wellicht een heel algemeen model; dat is dan wel moeilijk om toe te passen om te valideren.
	- Michel: dit is ook zo in bv de CB-NL, dat is ook een heel generiek model. 
	- Paul: als validatie een onderwerp is, moet je er wel wat mee. Flexibiliteit gaat ten koste van valideerbaarheid. Je moet er over nadenken.
	- Lennart: een model waarin alles optioneel is, dat is een soort anti-pattern
	- Niels: maar dit mist wel de kern van dit uitgangspunt. Valideerbaarheid zit meer bij U5, want doelgroepen zullen wellicht waarde hechten aan het kunnen valideren van gegevens.
	- Linda: ik heb in het architectuurdoc gekeken, zag validatie alleen genoemd bij registratie maar kreeg geen goed gevoel over het belang dat er aan gehecht wordt.
	- Jan: werd wel belangrijk gevonden, met name validatie aan de bron. 
	- Pano: eens met Niels dat het niet bij U3 hoort; moet validatie in een apart uitgangspunt? Het is wel nogal een open deur. 
	- Jan: aan de afnemerskant / bij informatieproducten is het minder van belang.
	- Paul: ik heb de opmerking gemaakt omdat ik vind dat er rekening mee gehouden moet worden dat de genoemde modelleerparadigma's verschillende mogelijkheden bieden wat betreft validatie. 
	- Linda: concreet, moeten we iets toevoegen over validatie? 
	- **[todo] ** Niels: noot toevoegen aan U3 dat dit een aandachtspunt is. > Doen
	- Michel: 'verificatie' of 'validatie'? wat is de juiste term. Geeft definities: Verificatie is de bevestiging dat het juist is gemaakt, oftewel dat het voldoet aan de eisen. Validatie is de bevestiging dat het juiste is gemaakt, oftewel dat het voldoet aan de behoeftes van de klant en andere stakeholders.
	- Lennart: is het woord paradigma's niet raar om hier te gebruiken? Het zijn toch gewoon formaten? 
	- Pano: het zijn wel daadwerkelijk verschillende paradigma's > niet wijzigen
	- Lennart vraagt nog of we ook van plan zijn het model in deze paradigma's uit te drukken, of alleen zorgen dat het kan? 
	- Pano: het streven is om vanuit MIM ook LD te implementeren. > geen wijziging.
	- Voorstel: Met wijziging titel en toevoegen Noot (zie todo's) vaststellen
	- Lennart: ik ben ongelukkig met het voorbeeld. Zo lijkt het kritiek op de BAG dat ze proberen een document in een pand te modelleren. Het is geen document maar een documentverwijzing. 
	- Pano: juist wel een goed voorbeeld
	- Paul: eens met Pano, een pand heeft geen documentdatum. 
	- Lennart: stelt voor kleine toevoeging te doen aan de tekst. 'op deze manier is het niet in graaf paradigma te gebruiken'. 
	- Paul: ook in objectgerichte paradigma is dit niet goed. 
	- Pano: idd, binnen een registratie kun je dit nog wel doen, er is dan een afspraak 'we bedoelen er dit mee'. Maar als je dit in samenhang met andere registraties wilt gebruiken wordt het problematisch. 
	- **[todo] ** Linda. Voorstel toelichting: 'hoewel dit in de BAG bedoeld is als een documentverwijzing, is het op deze manier niet in samenhang met andere registraties te gebruiken'. 
	- Lennart: of een ander voorbeeld kiezen. 
	- Linda: vinden anderen dit ook? 
	- Michel: het is geen ideaal voorbeeld.
	- **[todo] ** Pano: we kunnen ook een ander voorbeeld zoeken. Er komen een paar voorbeelden langs. 
	- Lennart: Afgezien van het voorbeeld is het uitgangspunt akkoord. 
	- Goedgekeurd met inachtneming van de hierboven genoemde to do's.
- U4 ter vaststelling
	- Pano: We hebben als implicatie toegevoegd dat een passende versioneringsstrategie nodig is ivm gerelateerde bestaande registraties en mappings tussen bestaande registraties en SOR. 
	- Lennart: moet er bij de implicaties nog iets bij over wat je dan moet doen als er iets wijzigt? 
	- Pano: we proberen hier nog niet te zeggen hoe de versioneringsstrategie moet worden ingevuld
	- **[todo] ** Michel: 'aanpasbaar' erbij zetten. uitbreidbaar, aanpasbaar en inkrimpbaar = flexibel. > doen
	- Lennart: belangrijke implicatie lijkt me dat als een bestaande registratie wijzigt, de SOR moet meebewegen. 
	- Pano: dat proberen we in algemene zin te zeggen bij de implicaties. 
	- Lennart: lijkt me zo voldoende.
	- **[todo] ** Paul: moet er nog iets bij over beheer / versionering? Iets met x y z... > doen
	- Pano: zal ik toevoegen
	- Met deze wijzigingen vastgesteld (zie todo's)
- U5 ter vaststelling
  - Linda legt uit dat ipv prioriteiten nu gesproken wordt van een belangenafweging tussen stakeholdersgroepen. En dat 'zuiver modelleren' eruit is. 
	- Zo akkoord, vastgesteld. 

## Principes
- P1 ter vaststelling
	- geherformuleerd: er staat nu 'in samenhang' bruikbaar
	- vastgesteld
- P2 ter vaststelling
	- geherformuleerd: 'relateerbaar' toegevoegd
	- Michel: gaat het ook over relaties, gegevens etc? 
	- **[todo] ** Pano: ja, zal dit nog verduidelijken. 
	- Vastgesteld met deze aanpassing (zie todo).
- P3 ter vaststelling
	- Pano: vorige keer niet echt bezwaren, maar wel een opmerking dat er ook gekeken zou moeten worden naar alternatieven wbt de modellering hiervan, concreet via een stereotype of tagged value in MIM. Dit alternatief noemen we nu ook in de tekst. Vraag aan Lennart is of dit voldoende is.
	- Lennart: Het is een low impact manier om te duiden dat iets geen intrinsieke eigenschap is. Je hoeft niet anders te gaan modelleren. Daarom vind ik dat we deze moeten overwegen. Maar het is wel minder zuiver. 
	- Paul: discussie of dit stereotype in MIM moet komen hoort niet hier thuis. Het is iets dat je in de SOR wellicht nodig hebt; of het in MIM komt is een latere stap. 
	- **[todo] ** Linda: voorstel tekst aanpassing: 'door middel van een meta aanduiding' of iets dergelijks.
	- **[todo] ** Lennart: het uitgewerkte voorbeeld aanpassen (Lennart en Pano offline)
	- met tekst aanpassing en voorbeeld aanpassing (zie todo's) vastgesteld
- P4 ter vaststelling
	- Pano: vorige keer hadden we het erover dat een gekoppeld begrip niet nodig is voor ieder element; in dit principe is nu aangescherpt voor welke informatiemodel-elementen geldt dat ze met minstens 1 begrip gekoppeld zijn. Als er niet minstens 1 begrip relatie is voor een van deze elementen moeten we uitleggen waarom niet. Verder is er in het principe een relatie opgenomen naar de MIM paragraaf waar dit uitgelegd wordt.
	- Michel: is 'kenmerksoort' attribuut of relatie of beide? 
	- Pano: beide. Ik zie dat we niet helemaal consequent zijn in terminologie, elders noemen we dit 'eigenschap'. Lennart, Paul, welke is beter? 
	- Paul: eigenschap. 
	- Lennart: in MIM zijn eigenschap en kenmerk synoniem. 
	- **[todo] ** Niels: 'kenmerksoort' hier vevangen door 'eigenschap' (staat er meerdere keren in)
	- vastgesteld met deze wijziging.

## Richtlijnen
- R1 ter vaststelling
	- Pano: R1 en R2 komen voort uit P3. Eerdere discussie leverde geen bezwaren op. Bij de implicaties staat dat we het nieuwe NEN 3610 modelleerpatroon hanteren. 
	- vastgesteld
- R2 ter vaststelling
	- Pano: vergelijkbaar met R1. 
	- Michel: is dit een speciaal geval ten opzichte van de vorige?
	- Pano: ja, omdat hier wel standaarden voor zijn en omdat in de SOR grote waarde wordt gehecht aan bron metadata.
	- Lennart: valt audit trail hier onder? Misschien eerder onder registratie metadata. 
	- Michel: het exacte verschil tussen registratiemetadata en herkomst- en bronmetadata is me niet duidelijk. 
	- Pano: misschien nog niet helder genoeg inderdaad. R1 gaat over gegevens die over het informatieobject gaan. R2 gaat verder, je zou hele reeks van gebeurtenissen die tot de totstandkoming van informatie hebben geleid, kunnen modelleren. Maar misschien kunnen we R1 en R2 samenvoegen.
	- Linda: kan me voorstellen dat je er 2 van hebt gemaakt omdat het ook denkbaar is dat je meerdere metadata objecten krijgt bij één object. 
	- Lennart: voorstel om er 1 richtlijn van te maken. Anderen vinden dit ook een goed idee.
	- **[todo] ** Pano: we gaan ze samenvoegen. Kunnen we deze dan vaststellen na de samenvoeging? Of willen jullie het nog een keer zien. Michel en Lennart? Anderen? 
	- Lennart: geef iedereen de kans te reviewen.
	- Pano voegt samen, dan opnieuw ter vaststelling.
- Oude richtlijn 2 over multiple inheritance is geschrapt. Akkoord.
- R3 ter vaststelling
	- Pano: vooral voor onszelf opgenomen. Deze is afhankelijk van discussie die nu loopt bij MIM werkgroep. Als dit tot verduidelijking leidt kunnen we R3 schrappen. 
	- Lennart: bedoeling van MIM is niet om met gegevensgroeptype 'zwakke' objecttypen te modelleren (objecttyen die niet zo belangrijk zijn in je universe of discourse en geen identificatie hebben) maar wordt in de praktijk wel zo toegepast. Gegevensgroeptype is alleen om samengestelde eigenschappen van het objecttype zelf te modelleren.
	- Paul: 'zwak objecttype' is een term die ik niet ken, nog wel een uitdaging om dit goed te duiden in MIM.
	- Pano: het gaat ook mis in MIM in de linked data transformatie die gespecificeerd is. Daar wordt van gegevensgroeptype een objecttype gemaakt. Er staan in MIM ook voorbeelden en uitwerkingen waarvan ik in verwarring raak.
	- Lennart: R3 is nu wel hard gesteld. **[todo] ** Als je er van maakt 'we wachten op verduidelijking in MIM" kan ik ermee leven. Over de voorbeelden: of je een motor of een oog beschouwt als objecttype of niet hangt af van je beschouwingsniveau. 
	- Paul: nee, een ding is altijd een ding
	- Michel: dit zijn beide compositie voorbeelden, die zijn wel lastig. Daarbij is het vaak niet duidelijk of ze bij het ding horen of zelf een ding zijn. 
	- Lennart: in een logisch model mag dit gewoon (zwakke objecttypen modelleren als gegevensgroeptype)
	- Pano: klopt, maar als je objecten 'verstopt' in andere objecten kun je daar geen samenhang mee realiseren voor die objecten. 
	- Michel: adviseert om dit even op conceptueel niveau te houden. Anders vermeng je zaken. 
	- Paul: maar op logisch niveau ook niet dingen ineens heel anders gaan doen. Dus niet conceptueel model heel zuiver houden en op logisch model wild gaan.
	- Linda: deze discussie moet inhoudelijk in de MIM werkgroep gevoerd worden, wij zullen daar ook aan deelnemen.
	- vastgesteld met deze aanpassing: dat als de verduidelijking in MIM is gekomen, we deze richtlijn zullen schrappen.

## Afspraak over vervolg
De expertgroepbijeenkomst van 29 juli blijft staan, Dick stuurt datumprikker voor nog enkele meetings daarna.