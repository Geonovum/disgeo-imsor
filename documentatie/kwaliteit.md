## Kwaliteit

Kwaliteit van gegevens is een soort metadata, maar zo'n groot onderwerp dat we het apart behandelen.

Zie https://github.com/Geonovum/disgeo-imsor/tree/master/kwaliteitseisen en de subfolder respec-docs.



### Gegevenskwaliteit

#### NORA vs ISO 19157

Tekst overnemen uit Github - disgeo-imsor/issues/60-metadata/datakwaliteit-nora-iso19157.md

#### Datakwaliteit in de SOR

Tekst overgenomen uit Github - disgeo-imsor/issues/60-metadata/datakwaliteit-sor.md

##### Informatiemodelniveau

*Eisen

| aspect  | beschrijving   | mogelijke kwaliteitsindicator   | mogelijk kwaliteitsaspect  |
|----|----|----|----|
| Authenticatie / Autorisatie  | vastleggen welke (categorieën) bronhouders er zijn voor elk  objecttype.   | Dit heeft te maken met authenticiteit   | plausibiliteit   |
| Populatie   | beschrijving van de populatie die wordt opgenomen in de SOR,  per objecttype   | Dit heeft te maken met thematische juistheid of met dataset  compleetheid   | compleetheid  |
| Actualiteit  | eis over binnen welk termijn (aantal dagen/maanden) na  realisatie/ontstaan van een object, dit object beschikbaar moet zijn in de  SOR, per objecttype   | Dit heeft te maken met de updatefrequentie   | actualiteit   |
| Verplichtheid   | per objecttype wordt aangegeven of het objecttype behoort tot  de verplichte inhoud of optioneel is   | Dit heeft te maken met dataset compleetheid  | compleetheid  |
| Inwinning / opname  | Er zijn afspraken nodig wat betreft de opname van informatie  in de SOR: objecten worden in de SOR opgenomen op het moment dat deze volgens  de voor het betreffende objecttype gedefinieerde criteria ontstaan   | Dit heeft te maken met conceptualConsistency  | consistentie  |
| Authenticatie / Autorisatie  | vastleggen welke bronhouders er zijn voor een attribuuttype,  wanneer 'mogelijke bronhouderschap' afwijkt van wat er bij het objecttype is  vastgelegd   | authenticatie   | plausibiliteit   |
| Verplichtheid   | per attribuuttype wordt aangegeven of het attribuuttpe behoort  tot de verplichte inhoud of optioneel is   | Dit heeft te maken met attribuut compleetheid   | compleetheid  |
| Bronverwijzing  | vastleggen of bronverwijzing aan de orde is, per objecttype  (dit is afhankelijk van de achtergrond van het opvoeren of beëindigen van een  object in de registratie).   | Dit heeft te maken met attribuut compleetheid   | compleetheid  |
| Bronverwijzing  | vastleggen of bronverwijzing aan de orde is, per attribuuttype  (dit is afhankelijk van de achtergrond van het opvoeren of wijzigen van een  attribuut in de registratie).   | Dit heeft te maken met attribuut compleetheid   | compleetheid  |
| Geometrie   | Minimale geometrietype die van toepassing is (2D, 2.5D, 3D)  | Dit heeft te maken met toplogische consistentie (zoals in NORA  beschreven)  | consistentie  |
| Topologie   | vastleggen van topologieregels voor objecttypes (bv: Knopen en  verbindingen bevinden zich binnen de contouren van de bijbehorende reële  objecten.)  | Dit heeft te maken met toplogische consistentie (zoals in ISO  19157 beschreven)   | consistentie  |

*Mogelijke eisen*
| aspect  | beschrijving   | mogelijke kwaliteitsindicator   | mogelijk kwaliteitsaspect  |
|----|----|----|----|
| Autorisatie  | Gebruiksautorisaties voor specifieke objecten in de SOR worden  in het informatiemodel expliciet benoemd   | -   | -  |
| Nauwkeurigheid  | Bij de uitwerking van de inhoud van de samenhangende  objectenregistratie wordt voor de verschillende objecttypen bepaald wat de  kleinste geometrische/cartografische eenheid is die nog van belang is voor  meerdere gebruikers van de registratie. |  | consistentie (homogeneiteit) / juistheid|
| Bronverwijzing  | vastleggen in welke gevallen men een verwijzing moet opnemen  naar een bron(document)  |  | compleetheid  |

##### Object/Attribuutniveau

*Eisen*

| aspect  | beschrijving   | mogelijke kwaliteitsindicator   | mogelijk kwaliteitsaspect  |
|----|----|----|----|
| Bronverwijzing (opname)  | Bij alle objecten wordt vastgelegd de wijziging op grond  waarvan het betreffende object in de registratie is opgenomen (of is  beëindigd).   | Dit gaat over herleidbaarheid, zou je ook kunnen vertalen in  een eis aan de metadata compleetheid (als onderdeel van een UsabilityElement  - de mate waarin de dataset voldoet aan een set eisen)  | traceerbaarheid / compleetheid   |
| Bronverwijzing (wijziging)  | Bij alle attributen wordt vastgelegd de wijziging op grond  waarvan het betreffende attribuut (wijziging van een attribuut) in de  registratie is opgenomen.  | Dit gaat over herleidbaarheid, zou je ook kunnen vertalen in  een eis aan de metadata compleetheid (als onderdeel van een UsabilityElement  - de mate waarin de dataset voldoet aan een set eisen)  | traceerbaarheid / compleetheid   |
| Geometrie (CRS)  | Iedere geometrie moet zijn voorzien van een verwijzing naar  het coördinaatreferentiesysteem (RD-NAP) waarin de coördinaten van de  geometrie zijn beschreven.   | Dit gaat over herleidbaarheid, zou je ook kunnen vertalen in  een eis aan de metadata compleetheid (als onderdeel van een UsabilityElement  - de mate waarin de dataset voldoet aan een set eisen)  | traceerbaarheid / compleetheid   |
| Geometrie (wijziging)   | vastlegging van het feit dat een bepaalde geometriewijziging  afkomstig is van een wijziging door een andere bronhouder   | Dit gaat over herleidbaarheid   | traceerbaarheid   |
| Bronverwijzing (wijze van inwinning)   | vastlegging van de wijze van inwinning/registratie van een  object (bij opvoering/beëindigen van het informatieobject): conform formele  brondocumenten (vergunningen, besluiten) of technische bronnen (luchtfoto's,  metingen, BIM-modellen).  | Dit gaat over herleidbaarheid. De vastlegging zelf is bedoeld  voor de bewijsbaarheid van de gegevens (het toont aan dat de gegevens juist  zijn, conform een bepaald document of objectieve meting). In dit geval gaat  het om de bewijsbaarheid op een geagregeerd niveau - van een ''set'' gegevens  (zoals bekend bij opvoering van de set in de registratie), of de afwezigheid  van de hele set   | traceerbaarheid / plausibiliteit  |
| Bronverwijzing (wijze van inwinning)   | vastlegging van de wijze van inwinning/registratie van een  attribuut (bij opvoering/wijziging van een gegeven): conform formele  brondocumenten (vergunningen, besluiten) of technische bronnen (luchtfoto's,  metingen, BIM-modellen).  | Dit gaat over herleidbaarheid. De vastlegging zelf is bedoeld  voor de bewijsbaarheid van de gegevens (het toont aan dat de gegevens juist  zijn, conform een bepaald document of objectieve meting).  | traceerbaarheid / plausibiliteit  |
| Bronverwijzing (wijze van inwinning)   | vastlegging van de totstandkoming van 3D geometrie  (post-processing, etc)  | Dit gaat over herleidbaarheid. De vastlegging zelf is bedoeld  voor de bewijsbaarheid van de gegevens (het toont aan dat de gegevens juist  zijn, conform objectieve regels). Het heeft mogelijk ook iets te maken met  reproduceerbaarheid: als de 3D geometrie tot stand is gekomen door de  uitvoering van een aantal regels voor het combineren van bv een puntenwolk  conform 2D begrenzingen, zou je deze regels kunnen vastleggen. | traceerbaarheid / plausibiliteit  |
| Bronverwijzing  (plaatsbepalingspunten) |  | Dit zegt iets over positionele juistheid/nauwkeurigheid  | juistheid  |
| Bronverwijzing (uitvoerder van inwinning) | vastlegging van de uitvoerder van de inwinning van een  attribuut  | Dit gaat over herleidbaarheid   | traceerbaarheid   |
| Controledatum   | vastlegging van de datum waarop controle van het attribuut  heeft plaatsgevonden   | Dit gaat over versheid   | actualiteit   |
| Wijze van controle  | vastlegging van de wijze waarop controle van het attribuut  heeft plaatsgevonden   | Dit gaat over herleidbaarheid   | traceerbaarheid   |
| Uitvoerder van controle  | vastlegging van de uitvoerder die de controle van een  attribuut heeft uitgevoerd  | Dit gaat over herleidbaarheid   | traceerbaarheid   |
| Nauwkeurigheid  | aanduiding van de klasse van nauwkeurigheid van de  geregistreerde geometrie   | Dit gaat over positionele juistheid/nauwkeurigheid   | juistheid  |
| Status  | per attribuut kunnen statussen worden toegekend: InOnderzoek,  inBewerking, reactieBelanghebbende  | Dit heeft te maken met de waarschijnlijkheid  | plausibiliteit   |
| Aantekenveld   | vastlegging van aantekeningen voor objecten  | Dit heeft misschien iets te maken met gebruiksinzicht,  duidelijkheid en begrijpelijkheid   | traceerbaarheid / begrijpelijkheid   |

**Mogelijke eisen**

| aspect  | beschrijving   | mogelijke kwaliteitsindicator   | mogelijk kwaliteitsaspect  |
|----|----|----|----|
| Traceerbaarheid  | Vastlegging van verantwoordelijke bronhouder van een object  (bv: welke gemeente verantwoordelijk is voor het bijhouden van het object)   | -   | traceerbaarheid   |
| Traceerbaarheid  | Vastlegging van bronhouder die mutatie (van een attribuut van  een instantie) heeft doorgevoerd - wanneer dit een andere bronhouder is dan  dat van het object.   | -   | traceerbaarheid   |
| Status  | Bij geometrie wordt in overweging gegeven een status  "inDiscussie" mogelijk te maken  | -   | 




