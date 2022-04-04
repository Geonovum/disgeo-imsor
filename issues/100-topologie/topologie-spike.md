# Topologie in de SOR
_Aantekeningen tbv de 'spike' story over topologie. Wat kleven er voor aspecten aan topologie / wat komt er allemaal bij kijken? Zodat we in een volgende sprint weten hoeveel tijd dit ongeveer kost om uit te werken._ 

In het [generieke onderwerpen document](https://geonovum.github.io/disgeo-imsor/documentatie/#topologische-regels) hebben we er al een eerste verkenning van gedaan. Daaruit blijkt over topologie: 
- een kwaliteitsraamwerk kan ingaan op topologische controles van de gegevens zelf. Het gaat dan om een kwaliteitsattribuut uit NORA: Topologische consistentie. Dit is ook een ISO kwaliteitsattribuut. 
- In de SOR eisen is topologie een datakwaliteitsaspect op informatiemodel-niveau. Het gaat er dan om hoe je in het informatiemodel vastlegt wat de topologieregels voor objecttypen zijn. Regels over topologische consistentie dus.
- In NEN 3610 staat ook iets over topologische relaties en dat staat in paragraaf 9.12. 
- EMSO beschrijft een aantal algemene topologische regels over vlakdekkendheid en topologie. 
- Voor ruimtelijke relaties tussen objecten kunnen we gebruik maken van de Simple Features relaties. Deze worden aangeraden in NEN 3610 en SDWBP. 
- Omdat er in de SOR meer met 3D wordt gewerkt, worden topologieregels complexer maar ook secundair aan de representatie van de werkelijke verhouding tussen objecten.
- Er is inhoudelijke expertise nodig om uit te werken welke objecttypen een rol spelen in landsdekkendheid, welke objecten specifieke topologische relaties met elkaar hebben. 
- Topologie in netwerken is een verhaal apart. Hier hebben we nog niet naar gekeken, afgezien van wat de stagiare er vorig jaar eventueel over heeft genoteerd.

"Topologie uitwerken" kun je kortom zien als twee verschillende dingen die allebei moeten gebeuren: Uitwerken van 
- Topologische kwaliteitseisen
- Topologische (ruimtelijke) relaties in de data

Daarbij spelen de volgende aspecten een rol, maar niet bij alle objecttypen:
- 3D is bij objecttypen die 2.5D of 3D geometrie krijgen, een complicerende factor bij zowel het uitwerken van kwaliteitseisen als het modelleren van ruimtelijke relaties in de data. 
- Bij het onderwerp Netwerken moet topologie extra aandacht krijgen. Dit is een onderwerp waar ruimtelijke relaties in de data heel sterk een rol spelen. 

Om echt een soort spike te doen pak ik even Bestuurlijk Gebied en dan ga ik daarvan de topologie uitwerken. 

## Bestuurlijk gebied topologie

### Topologische kwaliteitseisen
Uit EMSO: 
> sommige soorten objecten moeten in de registratie op hun begrenzing exact op elkaar aansluiten. Dit kan ook van toepassing zijn voor specifieke verzamelingen van functionele ruimten en registratieve- en geografische ruimten. Denk hierbij aan de verzameling van gemeenten waarvan de grenzen precies op elkaar moeten aansluiten. 

Ik kom dan tot de volgende topologische consistensie-regels voor bestuurlijke gebieden: 
- Een provincie valt altijd volledig binnen het Europese deel van het Koninkrijk der Nederlanden. 
- De geometrie van alle provincies moeten het Europese deel van het grondgebied van Nederland op land volledig bedekken. 
- Provincies mogen niet overlappen.
- Landsgrens moet precies overeenkomen met buitengrenzen van alle provincies bij elkaar. Maar dan goed geformuleerd. 
- Geen regels voor waterschappen.
- Een gemeente valt altijd volledig binnen een provincie. 
- De geometrie van alle gemeenten in een provincie moeten de provincie volledig bedekken. 
- Gemeentegrenzen mogen niet overlappen.
- geen regels bekend voor bestuurlijk gebied op zee

**Nota bene** Je kan natuurlijk ook zeggen: de topologische consistentie is al goed geborgd, hier hoeft de SOR niets extra's voor te doen. De vraag is dan: wil je de topologische consistentie kunnen gaan _controleren_? Dan moeten de regels exact gespecificeerd worden. Hoeft dit niet en wil je alleen aan data gebruikers _uitleggen_ dat de gegevens zo in elkaar zitten? Dan hoef je het alleen in begrijpelijke taal op te schrijven en/of te tekenen. Dit maakt verschil voor de tijd die eraan besteed moet worden.

### Topologische (ruimtelijke) relaties in de data

We kunnen de volgende relaties onderscheiden, op basis van EMSO:
 - Gemeente `ligt in` [1] Provincie. In Simple Features termen is dit `Within` of in de NL vertaling van NEN 3610 `binnen`
 - Veiligheidsregio `hoort bij` [1..*] Gemeente. In Simple Features termen zou dit kunnen zijn: `contains` a.k.a. NEN 3610 `bevat`, i.e. de Veiligheidsregio bevat 1 of meer Gemeenten. Maar misschien is dit door EMSO niet bedoeld?

 **Vraag:** Wat is precies de functionele wens die ten grondslag ligt aan de ruimtelijke relaties bij bestuurlijke gebieden in EMSO?

 **Vraag:** wat betekenen de relaties zoals gespecificeerd in EMSO precies? Gaat het om het gebied of het bestuurslichaam?

In NEN 3610 wordt gesproken van ruimtelijke relaties die je wel conceptueel modelleert, maar die je NIET vertaalt naar een administratieve relatie in de gegevens, omdat het mogelijk is deze relatie geometrisch af te leiden. Daarom moeten we ons afvragen of het wel of niet gewenst is deze ruimtelijke relaties tussen bestuurlijke gebieden administratief vast te leggen. Voor bestuurlijke gebieden heb ik ervoor gekozen dit WEL te doen. Argumentatie: als ze voor veel gebruikers handig zijn, wel doen. Dan hoeven de relaties niet elke keer te worden uitgerekend door danwel de gebruikers danwel de voorziening. Dus je doet het als het een welkome service voor de gebruikers is of een optimalisatie voor de voorziening.

Als de ruimtelijke relatie NIET administratief gewenst is, dan conform NEN 3610 in het UML diagram de ruimtelijke relaties tussen objecttypen weergeven door associaties met het stereotype «Ruimtelijke relatie». Het stereotype «Ruimtelijke relatie» geeft aan dat dit een ruimtelijke relatie is en geen administratieve relatie die met een kenmerk wordt opgenomen.

**Vraag:** Modelleren we ruimtelijke relaties met geometrische datatypen ( zoals `GM_Surface`) of met topologische? Kan dit laatste (of heb je geen topologische vlakken)? Wat is het verschil? 

Topologie en 3D: 
- Uit EMSO: De SOR kent voor alle functionele ruimten een 2D geometrie. 3D geometrie speelt dus geen rol. 

Topologie in netwerken
- Ook dit speelt niet bij bestuurlijke gebieden.

Tijdsinschatting voor bestuurlijke gebieden: 
- topologische consistentie-regels formuleren voor bestuurlijke gebieden is op zich wel te doen, je kunt ze uit EMSO halen. Dit kost een uurtje. Dit is echter niet voor alle objecttypen omschreven in EMSO. 
- Hierbij alleen nog de functionele vraag: moeten de topologische regels exact gespecificeerd worden zodat ze ook automatische gecontroleerd kunnen worden? 
- ruimtelijke relaties in de data: die zijn ook wel te vinden in het EMSO. Maar wat betekenen ze precies, gaat het om relaties tussen de gebieden of de bestuurslichamen? En wat is de functionele wens precies? Hier is nader onderzoek voor nodig. 
- Topologie en 3D speelt niet;
- Topologie in netwerken speelt niet.

Ik heb hier nu 3 uur aan besteed en heb een basisformulering voor topologische consistentie-regels en voor ruimtelijke relaties. Er zijn nog wel open vragen. Voor deze vragen zijn nog wel wat dagen nodig om ze beantwoord te krijgen. 

- Beantwoorden vraag: _moeten de topologische regels exact gespecificeerd worden_. Ik zou het niet weten. Wie moeten we dat vragen? Mensen van het kadaster? Misschien is er wel een workshop nodig? Even niet uitgaande van een workshop, 2 tot 3 points. 
- Beantwoorden vraag: _wat betekenen de ruimtelijke relaties precies en wat is de functionele eis_: 2 tot 3 points. 

### Fysiek object topologie
_Hier nog niet zo ver mee gekomen, maar mijn vermoeden is dat dit wel eens ingewikkelder kan zijn dan bij bestuurlijke gebieden. Zeker omdat 3D en netwerken een rol gaan spelen._ 

Topologische kwaliteitseisen: 
- Uit EMSO: op elke fysieke locatie in de werkelijkheid (elke x,y-coördinaat) is er altijd tenminste een reëel object aanwezig (water, begroeiing, gebouw, verharding, kunstwerk, constructies of onbepaald terrein).
- Uit EMSO: Geometrieën van objecten kunnen elkaar uitsluiten. Voor de SOR zal later uitgewerkt worden voor welke geometrieën van welke objecttypen dit zal worden afgedwongen. 

Topologische (ruimtelijke) relaties in de data

Topologie en 3D: speelt een rol.

Topologie in netwerken
- Functionele netwerkobjecten kunnen topologische relaties hebben met reële objecten. bv een eis dat de netwerkgeometrie zich moet bevinden binnen de contouren van de bijbehorende reële objecten. Dit kost vooral werk bij de netwerkobjecten, niet bij de reële objecten waar ze mogelijk een relatie mee hebben. Maar we moeten wel uitzoeken of er in de modellering van reële objecten rekening mee gehouden moet worden. Door het INSPIRE netwerkmodel te bestuderen. 
