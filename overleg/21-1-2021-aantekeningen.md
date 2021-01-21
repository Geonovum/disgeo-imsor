# Verslag 5e expertgroepbijeenkomst 
21 januari 2021

## Agenda: 
- de uitwerkingen van het [BOOM voorbeeld](https://geonovum.github.io/disgeo-imsor/casus/imboom/) verder bespreken.

Aanwezig: Pano, Annemiek, Dick, Rik, Paul, Gabriella, Michel, Niels, Ruud, Lennart, Linda

# Gedetailleerde aantekeningen van het gesprek
- procesafspraak: we gaan naar een frequentie van 1x per 3 weken een bijeenkomst voor deze expertgroep. Volgende afspraken zijn ingepland.
- Linda: introduceert de meeting. Vandaag gaan we verder praten over de uitwerkingen van het Boom voorbeeld in het kader van [issue 14][1], het modelleren van metagegevens en historie op attribuutniveau. De hoop is dat de groep nu of dan toch binnenkort tot een keuze kan komen, maar we (Linda, Pano en Gabriella) hebben dit intern voorbesproken en gesignaleerd dat het nog wel lastig is om te kiezen, omdat voor alle opties wel wat te zeggen valt. De criteria om te kunnen kiezen zijn ook nog niet helder geformuleerd. We zijn benieuwd zijn naar de meningen in deze groep. Als we er niet uitkomen gaan we als uiterste middel misschien vragen om een stemming. 
- Consensus in de groep is om dat in ieder geval nog niet vandaag te doen omdat men meer tijd nodig heeft om de uitgewerkte voorbeelden goed te begrijpen. 
- Pano introduceert het doc en legt uit dat hij de verschillende uitwerkingen heeft bewerkt zodat ze over hetzelfde gaan en dezelfde naamgevingen gebruiken, om ze optimaal vergelijkbaar te maken.
En loopt vervolgens door het doc heen en licht het toe.
- Optie A: Volgens Lennart is optie A ook wel meer in MIM termen uit te drukken als je het ipv gegevenstype over attribuutsoort hebt. Op het meest abstracte MIM niveau kan dat. 
- Maar Paul merkt dan weer terecht op dat je in de IM uitwerking aan de linkerkant het zou hebben over attribuutsoorten, maar dat het aan de rechterkant juist goed is om te spreken van gegevenstype, om het onderscheid te maken. 
- Lennart: ik kan in deze plaat niet goed zien wat metadata is. Zijn de groene blokjes rechts (Observatie) metadata? Als je metadata aanpast verandert het object niet, maar als je data aanpast wel. Daarom wil je het verschil kunnen zien (ook als je dit model bv implementeert). 
- Pano: Eigenlijk is alles behalve onderwerp, kenmerk en waarde (die samen het gegeven identificeren), metadata. De vraag is of je dit op een of andere manier kunt aangeven. Voor bv XML encoding is dit weer van belang. Wat objectdata en wat metadata is, is echter een kwestie van perspectief/view/context. Vanuit het perspectief van de SOR later bedenken wat metadata is. 
- Daarna bespreken we informatiemodel optie C. HIerin zijn nog kort voor de vergadering wijzigingen van Lennart verwerkt. In deze optie is expliciet aangegeven wat metadata is en is de waarde niet redundant opgenomen maar staat alleen links, in het object. Alleen de metadata over het gegeven staat rechts in de metadata.
- Michel: `kenmerk: hoogte` > is dat een constraint? Of is hoogte een datatype? Of een literal string? 
- Daarna bespreken we optie B. Pano: deze past in het MIM metamodel, maar je verandert hier ingrijpend het conceptueel model. 
- Lennart: in MIM termen kun je niet een attribuutsoort tot objecttype maken, dus optie B past niet in het MIM metamodel.
- Paul: Een variant hierop, "optie D",  zou kunnen zijn dat je in plaats van een objecttype voor elk gegeven, een gegevensgroeptype maakt voor elk gegeven. Je krijgt dan 1 groot object met een complex gegevensgeheel.
- Niels: is puur vanuit LD gedachte gaan modelleren, en heeft daarbij niet MIM als uitgangspunt genomen. Dus zou dit niet met gegevensgroeptypen willen doen. 
- Michel: Deze optie ligt het dichtste bij NTA. Maar bv in [RDF*](https://w3c.github.io/rdf-star/rdf-star-cg-spec.html) kun je aan triples weer gegevens hangen, dit is echter nog wel heel nieuw.
- Hierna bespreken we de serialisaties. 
- Nadeel van de optie A XML serialisatie is dat je niet kunt zien dat 35000 bij aantalBladeren hoort, dat moet je weten. je zou met optie A ook tot een XML serialisatie zoals die bij optie C kunnen komen. 
- De optie B xml serialisatie is gelijk aan hoe Paul’s optie D ook geserialiseerd zou worden in XML.
- Ruud: er is een relevante use case waarin een gegeven op verschillende momenten in de tijd opnieuw kan worden vastgesteld, er kan dan een nieuwe waarde zijn of de waarde kan hetzelfde zijn. Maar het is dan wel relevant dat er meerdere waarnemingen zijn geweest. Dit heeft Pano wel geprobeerd te modelleren, maar in het nu uitgewerkte voorbeeld is het gegeven wel van waarde veranderd, terwijl er ook situaties zijn waarin dit niet zo is, maar de gedane waarnemingen wel interessant op zich zijn. Een ander voorbeeld van verschillende bronnen met 1 gegeven is dat je de (zelfde) waarde hebt vastgesteld op verschillende manieren. (bv een geometrie inwinnen vanaf een plantekening en vervolgens in het veld ingemeten). De relatie van gegeven naar bron moet dus meervoudig zijn. 
- Een optie is ook om de relatie andersom te laten lopen van bron naar gegeven. 
- Er moeten wel nieuwe encoding regels gemaakt worden.

## Tijdens de vergadering gehoorde voor- en nadelen

Optie A
- voordeel: je kan kiezen voor de objectbeschouwing of de gegevensbeschouwing, zo bedien je 2 gebruiksvragen optimaal zonder dat ze last van elkaar hebben.
- voordeel: optie A kan binnen MIM 1.1 uitgedrukt worden (Lennart)
- nadeel: de XML encoding is niet zelf uitleggend. Je weet zonder specifieke toelichting niet dat 35000 de waarde van aantalBladeren is. 

Optie C

- voordeel: geen redundantie (de gegevenswaarden zijn maar één keer opgenomen)
- nadeel (Paul): er is geen echte binding, UML technisch, tussen de metadata over een gegeven rechts, en het gegeven zelf links. Je moet matchen op naam. De relatie ‘betreft’ gaat naar het object, niet naar het specifieke gegeven van het object waar het over gaat. Er is een ‘by convention’ element hierin, je moet weten hoe je het model moet lezen. 
- je maakt specifieke ‘productmodellen’ aan de hand van de vraag. Hierdoor kan het informatiemodel leveren wat de klant wil. Er is wel een tussenstap (productmodel maken) nodig.
- je kunt hier wel een encoding regel voor maken, nadeel is dat dit wel een specifieke encoding rule is die nu nog niet is gestandaardiseerd.

Optie B:

- nadeel: past niet in MIM, volgens Lennart.
- ... (aantekeningen hier niet volledig)

Optie D: 

- voordeel: UML conform, heel rechttoe rechtaan. 
- nadeel: (Pano) lastig naar linked data te serialiseren
- nadeel: je moet 2 informatiemodellen maken, eentje voor de gebruikers die wel metadata willen en eentje voor wie dat niet wil.

## Acties
1. de tijdens de sessie besproken criteria rondsturen + link naar [het issue waarin de use cases staan][1] (Linda)
1. optie D uitwerken (Pano en Paul)
1. afstemmen of uitwerking C helemaal is zoals bedoeld (Pano met Lennart)
1. uitwerking van de use case waarin je meerdere waarnemingen/vaststellingen in de tijd hebt waar dezelfde waarde voor een gegeven uit komt (Ruud)
1. uitzoeken: Kun je de XML serialisatie van C ook op A toepassen? Dan heb je misschien het beste van 2 werelden. (geen actiehouder - Pano?)
1. ieder van ons: de verschillende opties scoren aan de hand van de criteria (zie hieronder).

## Criteria

De volgende criteria voor het beoordelen van de modelleeropties zijn tijdens de sessie benoemd:

1. dekt het de functionele use cases af
1. is het wel/niet 'by convention' die niet gestandaardiseerd is i.e. is er meer voor nodig dan MIM kennis om het model te begrijpen
1. is het standaard te serialiseren out of the box, dat wil zeggen zonder nieuwe encoding rules naar XML, RDF, en JSON
1. is het wel/niet een verandering aan het objectendeel van het conceptuele model
1. is er wel/geen redundantie in de gegevens
1. mate van complexiteit
1. is het wel/niet ook te gebruiken zónder metadata voor de 90% gebruikers die dat voldoende vinden
1. is het geschikt voor registratie of geschikt voor uitleveren

[1]: https://github.com/Geonovum/disgeo-imsor/issues/14