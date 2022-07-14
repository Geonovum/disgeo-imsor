# MIM profiel voor DiS-Geo

Zoals beschreven in [Uitgangspunt 2](https://geonovum.github.io/disgeo-imsor/modelleerprincipes/#u2-informatiemodel-maakt-gebruik-van-relevante-standaarden) modelleren we voor DiS-Geo conform relevante standaarden, en zal de gegevensmodellering plaatsvinden conform het Metamodel Informatie Modellering [[MIM]].

In MIM ontbreekt een aantal metadata-elementen die we graag willen toepassen in de DiS-Geo modellering. Deze voegen we toe in ons MIM profiel voor DiS-Geo. 

Drie van deze metadata-elementen zijn aspecten van kwaliteit. MIM kent een metadata-aspect `Kwaliteit`, maar voor DiS-Geo is dit niet voldoende en splitsen we dit uit naar drie voor geo-informatie belangrijke kwaliteitsaspecten. Een andere aanpak zou kunnen zijn om te verwijzen naar een extern beheerd kwaliteitshandboek, maar we willen deze kwaliteitsaspecten graag bij het informatiemodel beschrijven en beheren. 

Het gaat in totaal om de volgende vier metadata-elementen die het DiS-Geo MIM profiel toevoegt: 

## Specificatie voor `Objecttype`

Aspect | Kardinaliteit | Toelichting | In EA
-------|---------------|-------------|------
actualiteit | 1 | Beschrijving van eisen aan de update frequentie. | Tagged value
compleetheid | 1 | Geeft de mate van compleetheid van het objecttype aan. | Tagged value


## Specificatie voor `Attribuutsoort`

Aspect | Kardinaliteit | Toelichting | In EA
-------|---------------|-------------|------
inwinregels | 0..1 | Hyperlink naar inwinregels voor het objecttype. Deze zijn te omvangrijk om in EA op te nemen. | Tagged value
positionele juistheid | 0..1 | De nauwkeurigheid van de geometrie. | Tagged value

Hieronder worden de aspecten nader toegelicht. 

### Actualiteit

Actualiteit is de mate waarin gegevens recent genoeg zijn. Het is één van de NORA [kwaliteitsdimensies](https://www.noraonline.nl/wiki/Raamwerk_gegevenskwaliteit/Kwaliteitsdimensies_tabel). 

Dit metadata-aspect geeft aan binnen welke termijn (aantal dagen/maanden) na realisatie/ontstaan van een object, dit object beschikbaar is. Het geeft dus de [updatefrequentie](https://www.noraonline.nl/wiki/Updatefrequentie) aan. 

<aside class="issue">De actualiteitseis en in meer of mindere mate ook de andere metadata-aspecten doen erg denken aan de situatie dat de SOR een nieuwe, aparte registratie zou worden. Maar in het geval dat DiS-Geo als een soort virtuele laag bovenop de huidige registraties gerealiseerd wordt, zijn het eigenlijk geen <i>eisen</i> die gesteld worden. Dan gaat het meer om DiS-Geo als dataproduct, en de metadata aspecten <i>beschrijven</i> dan wat de actualiteit, compleetheid, positionele juistheid en inwinregels zijn. Die worden dan niet gesteld maar afgeleid uit de onderliggende registraties. 

In dat geval is het niet nodig om deze metadata aspecten bij het IM op te nemen (hoewel het zou kunnen als extra informatie voor de lezer), tenzij eventueel voor nieuw te introduceren objecttypen. Maar dan nog heeft DiS-Geo misschien niet zoveel te eisen. 
</aside>

De actualiteit wordt beschreven bij het objecttype in de tagged value `Actualiteit`. Het domein van deze tagged value is alfanumeriek. De actualiteit wordt uitgedrukt in termen van aantal dagen/weken/maanden. 

### Compleetheid

Dit metadata-aspect geeft aan in welke mate gegevens aanwezig zijn over het objecttype. Het is één van de NORA kwaliteitsdimensies. Het gebruik in DiS-Geo van het metadata-aspect compleetheid lijkt erg op het NORA kwaliteitsattribuut [Dataset compleetheid](https://www.noraonline.nl/wiki/Dataset_compleetheid), maar we gebruiken het meer specifiek om aan te geven of een objecttype in het kader van een registratie verplicht moet worden ingewonnen. 

De compleetheid wordt beschreven bij het objecttype in de tagged value `Compleetheid`. Het domein van deze tagged value is `Verplicht | Optioneel`. 

### Inwinregels
Uit [[nen-3610-2022]]: 
> Inwinregels geven aan welke punten van een object ingemeten moeten worden en waar de geometrie van een geregistreerd object aan moet voldoen. Het leidt tot een vastgestelde geometrische weergave gericht op een specifieke toepassing.

Verreweg de meeste objecttypen in die in DiS-Geo een rol spelen hebben in hun huidige registratie al enige vorm van inwinregels. Omdat dit vaak omvangrijke instructies zijn, zijn ze meestal in tekst uitgeschreven in een apart handboek of hoofdstuk van de gegevenscatalogus. 

Via de tagged value `Inwinregels` relateren we deze teksten aan de bijbehorende modelelementen (annotatie).

De waarde van de tagged value `Inwinregels` is een URI. 

Deze tagged value wordt alleen ingevuld bij attribuutsoorten die een geometrietype als domein hebben.

### Positionele juistheid

Dit metadata-aspect geeft aan in welke mate locatiegegevens overeenkomen met de werkelijkheid. Het is één van de NORA kwaliteitsattributen (zie NORA [positionele juistheid](https://www.noraonline.nl/wiki/Positionele_juistheid)). In [[EMSO]] wordt dit *nauwkeurigheid* genoemd. Het is hetzelfde als wat in de BGT *positionele nauwkeurigheid* wordt genoemd:

> Onder positionele nauwkeurigheid verstaat men de mate waarin de opgeslagen coördinaten overeenkomen met de waarden in de werkelijkheid of de geaccepteerde afwijking.

Per geometrisch attribuut geven we de toegestane kwaliteit voor de positionele nauwkeurigheid als een getal in centimeters. Dit getal geeft dan de toegestane afwijking weer. 

Deze tagged value wordt alleen ingevuld bij attribuutsoorten die een geometrietype als domein hebben.
